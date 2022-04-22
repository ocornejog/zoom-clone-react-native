import * as React from 'react';
import { Alert, Animated, Platform, ToastAndroid } from 'react-native';
import { StyleSheet, Button, Text, View, SafeAreaView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { io } from 'socket.io-client';
import Header from '../components/header';
import MenuButtons from '../components/MenuButtons';
import Searchbar from '../components/Searchbar';
import ContactsMenu from '../components/ContactsMenu';
import MeetingRoomCheckBox from '../components/MeetingRoomCheckBox';
import Styles from '../constants/Styles';
//import Colors from '../constants/Colors';
//import useColorScheme from '../hooks/useColorScheme';
//import Styles from "../constants/Styles";
import API from '../constants/API';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';
import { useHeaderHeight } from '@react-navigation/elements';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
let socket;
function JoinARoom({ navigation }) {
    // put here your states
    const cameraRef = React.useRef();
    const [videoOn, setVideoOn] = React.useState(false);
    const [personalUserIDOn, setPersonalUserIDOn] = React.useState(false);
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.front);
    const [meetingID, setMeeetingID] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [join, setJoin] = React.useState(false);
    const [videoOff, setVideoOff] = React.useState(false);
    const [audioOff, setAudioOff] = React.useState(false);
    const [activeUsers, setActiveUsers] = React.useState();
    const [startCamera, setStartCamera] = React.useState(false);
    const [isCameraReady, setIsCameraReady] = React.useState(false);

    // put here your functions and handlers
    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log(status);
        if(status === "granted"){
            setStartCamera(true);
        }
        else{
            if (Platform.OS === "android"){
                ToastAndroid.show("Access denied", ToastAndroid.SHORT);
            }
            if (Platform.OS === "ios"){
                Alert.alert("Access denied");
            }
            if (Platform.OS === "web"){
                alert("Access denied");
            }
        }
    }
    const joinRoom = () => {
        __startCamera();
        socket.emit('join-room', {
            roomId: meetingID,
            userName: username
        })
    };
    const onCameraReady = async() => {
        setIsCameraReady(true);
        const listSizes = await cameraRef.current.getAvailablePictureSizesAsync('16:9');
        console.log(listSizes); 
    };
    //put here your permanent operations
    React.useEffect(()=> {
        //console.log('tuel');
        socket = io(`${API.APIuri}`);
        socket.on('connection', () => console.log('connected'));
        socket.on('all-users', users => {
            console.log("Active Users:", users);
            setActiveUsers(users);
        })
    }, [])
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{paddingLeft: 12}}>
                <Text style={[FontStyles.text, {color: '#0e72ec'}]}>{'Cancel'}</Text>
            </TouchableOpacity>  
          ),
        });
    }, [navigation]);
    const screen = Dimensions.get("screen");
    const window = Dimensions.get("window");
    const [dimensions, setDimensions] = React.useState({ window, screen });
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    React.useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    const headerHeight = useHeaderHeight();
    //const bottomHeight = useBottomTabBarHeight();
    const height = (window.height > window.width) ? window.height - headerHeight+ StatusBar.currentHeight : window.height - headerHeight; // paddingTop -headerHeight-10
    const height2 = (window.height > window.width) ? window.height - headerHeight : window.height - headerHeight;
    const width = window.width;
    const SPEEDOMETER_HEIGHT = (Platform.OS === 'web')? (width>(1.6*height2))? width*0.25: (height2>width)? width*0.5: width*0.33: width*0.7;
    const space = width > height ? 0.2: 0;

    return (
        <View style={[Styles.container1, {backgroundColor: '#f9f9f9'}]}>
            {(startCamera === true)?
            <View>
                <SafeAreaView>
                    <Camera
                        style={{width:'100%', height: 600}}
                        type={cameraType}
                        autoFocus={"on"}
                        ref={cameraRef}
                        pictureSize={"1280x720"}
                        onCameraReady={onCameraReady}
                    ></Camera>
                </SafeAreaView>
            </View>
            :
            <View>
                <View style={{height: 1, marginTop: 16, backgroundColor: C.greyLow}}></View>
                <View style={{backgroundColor: C.whitePrimary}}>
                    <TextInput style={[FontStyles.text, {height: 48, width: '100%', backgroundColor: C.whitePrimary, alignItems: 'center'}]} mode={'outlined'} placeholder={'Meeting ID'} onChangeText={(value) => setMeeetingID(value)} label={''} 
                    value={meetingID} keyboardType={'default'} secureTextEntry={false} outlineColor={C.whitePrimary} autoCapitalize={'none'} 
                    right={undefined} theme={{colors:{...DefaultTheme.colors, primary: C.blueLogo, text: C.black}, 
                    fonts:{
                        regular: {
                            fontFamily: 'Lato_400',
                            fontSize: 20,
                            lineHeight: 24,
                            letterSpacing: -0.408
                        }
                    }}}/>
                </View>
                <View style={{height: 1, backgroundColor: C.greyLow}}></View>
                <View style={{marginTop: 16, alignSelf: 'center'}}>
                    <Text style={[FontStyles.bodyBig, {color: '#0e72ec'}]}>{'Join with a meeting room name'}</Text>
                </View>
                <View style={{height: 1, marginTop: 16, backgroundColor: C.greyLow}}></View>
                <View style={{backgroundColor: C.whitePrimary}}>
                    <TextInput style={[FontStyles.text, {height: 48, width: '100%', backgroundColor: C.whitePrimary, alignItems: 'center'}]} mode={'outlined'} placeholder={'Oscar Cornejo'} onChangeText={(value) => setUsername(value)} label={''} 
                    value={username} keyboardType={'default'} secureTextEntry={false} outlineColor={C.whitePrimary} autoCapitalize={'none'} 
                    right={undefined} theme={{colors:{...DefaultTheme.colors, primary: C.blueLogo, text: C.black}, 
                    fonts:{
                        regular: {
                            fontFamily: 'Lato_400',
                            fontSize: 20,
                            lineHeight: 24,
                            letterSpacing: -0.408
                        }
                    }}}/>
                </View>
                <View style={{height: 1, backgroundColor: C.greyLow}}></View>
                <TouchableOpacity style={{backgroundColor: (join === false)? '#f0eff4': '#0e72ec', borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 5, 
                paddingHorizontal: 10, width: 300, alignSelf: 'center', marginTop: 48}} 
                onPress={() => {
                    //setJoin(!join);
                    joinRoom();
                }}>
                    <Text style={[FontStyles.textBold, {color: (join === false)? "#737486": "#feffff"}]}>{"Join"}</Text>
                </TouchableOpacity>
                <View style={{marginTop: 8, paddingLeft: 16}}>
                    <Text style={[FontStyles.bodyBig, {color: C.greyDark}]}>{'If you received an invite link, tap that link to join the meeting'}</Text>
                </View>
                <View style={{marginTop: 32, paddingLeft: 16}}>
                    <Text style={[FontStyles.bodyBig, {color: C.greyDark}]}>{'OPTIONS TO ENTER'}</Text>
                </View>
                <View style={{height: 1, marginTop: 16, backgroundColor: C.greyLow}}></View>
                <View style={{backgroundColor: C.whitePrimary}}>
                    <View style = {{width: width-64, alignSelf: 'center', justifyContent: 'center', alignContent: 'center', height: 40}}>
                        <MeetingRoomCheckBox label = {"Don't connect to audio"} onCheck={(e) => {console.log(e); setAudioOff(e)}}/>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: C.greyLow}}></View>
                <View style={{backgroundColor: C.whitePrimary}}>
                    <View style = {{width: width-64, alignSelf: 'center', justifyContent: 'center', alignContent: 'center', height: 40}}>
                        <MeetingRoomCheckBox label = {"Turn off my video"} onCheck={(e) => {console.log(e); setVideoOff(e)}}/>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: C.greyLow}}></View>
            </View>
            }
        </View>
    );
}

export default JoinARoom;