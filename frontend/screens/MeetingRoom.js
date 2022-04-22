import * as React from 'react';
import { Animated, Platform } from 'react-native';
import { StyleSheet, Button, Text, View, SafeAreaView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/header';
import MenuButtons from '../components/MenuButtons';
import Searchbar from '../components/Searchbar';
import ContactsMenu from '../components/ContactsMenu';
import MeetingRoomCheckBox from '../components/MeetingRoomCheckBox';
import Styles from '../constants/Styles';
//import Colors from '../constants/Colors';
//import useColorScheme from '../hooks/useColorScheme';
//import Styles from "../constants/Styles";
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';
import { useHeaderHeight } from '@react-navigation/elements';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function MeetingRoom({ navigation }) {
    // put here your states
    const [videoOn, setVideoOn] = React.useState(false);
    const [personalUserIDOn, setPersonalUserIDOn] = React.useState(false);

    // put here your functions and handlers

    //put here your permanent operations
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
            <View style={{height: 1, marginTop: 16, backgroundColor: C.greyLow}}></View>
            <View style={{backgroundColor: C.whitePrimary}}>
                <View style = {{width: width-64, alignSelf: 'center', justifyContent: 'center', alignContent: 'center', height: 40}}>
                    <MeetingRoomCheckBox label = {"Video on"} onCheck={(e) => {console.log(e); setVideoOn(e)}}/>
                </View>
            </View>
            <View style={{height: 1, backgroundColor: C.greyLow}}></View>
            <View style={{backgroundColor: C.whitePrimary}}>
                <View style = {{width: width-64, alignSelf: 'center', justifyContent: 'center', alignContent: 'center', height: 40}}>
                    <MeetingRoomCheckBox label = {"Use personal meeting ID (PMI)"} onCheck={(e) => {console.log(e); setPersonalUserIDOn(e)}}/>
                </View>
            </View>
            <View style={{height: 1, backgroundColor: C.greyLow}}></View>
            <TouchableOpacity style={{backgroundColor: '#0e72ec', borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 5, 
            paddingHorizontal: 10, width: 300, alignSelf: 'center', marginTop: 48}} onPress={() => console.log('Buttom for adding contacts pressed')}>
                <Text style={[FontStyles.textBold, {color: "#feffff"}]}>{"Start a meeting"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MeetingRoom;