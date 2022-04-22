import * as React from 'react';
import { Animated, Platform } from 'react-native';
import { StyleSheet, Button, Text, View, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/header';
import MenuButtons from '../components/MenuButtons';
import Searchbar from '../components/Searchbar';
import ContactsMenu from '../components/ContactsMenu';
import Styles from '../constants/Styles';
import { useHeaderHeight } from '@react-navigation/elements';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
//import Colors from '../constants/Colors';
//import useColorScheme from '../hooks/useColorScheme';
//import Styles from "../constants/Styles";
//import C from '../constants/mainColors';
//import FontStyles from '../constants/mainTextFormats';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
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
            <View style={Styles.container1}>
                <SafeAreaView style={{height: '100%'}}>
                    {/* Header */}
                    <Header width={width}/>
                    {/* Searchbar */}
                    <View style={{marginTop: 12}}></View>
                    <Searchbar/>
                    {/* Menu buttons */}
                    <MenuButtons navigation={navigation}/>
                    {/* Contacts menu */}
                    <ContactsMenu/>
                </SafeAreaView>
            </View>
    );
}

export default Home;