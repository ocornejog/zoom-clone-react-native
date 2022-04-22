import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, TextInput, Switch, Platform } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

const MenuButtons = ({navigation}) => {
    //-----------------------------------------------------------
    // Hooks for the attributes
    const [selectedItem, setSelectedItem] = useState(0);
    //-----------------------------------------------------------
    // Functions to assign data to Hooks
    const openMeeting = () => {
        navigation.navigate('Room');
    };
    const joinaMeeting = () => {
        navigation.navigate('Join');
    };
    //-----------------------------------------------------------
    // Rendering the component ...
    return (
        <View style={[styles.container, {width: (Platform.OS === 'web')? '50%': '100%'}]}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor: (selectedItem === 0)? '#ff742f': '#0e72ec'}]} 
                onPress={() => {
                    setSelectedItem(0);
                    openMeeting();
                }}>
                    <FontAwesome name="video-camera" size={24} color={C.whitePrimary} />
                </TouchableOpacity>
                <Text style={[FontStyles.body, {paddingTop: 10, color: '#727378'}]}>{"New meeting"}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor: (selectedItem === 1)? '#ff742f': '#0e72ec'}]} 
                onPress={() => {
                    setSelectedItem(1);
                    joinaMeeting();
                }}>
                    <MaterialIcons name="add-box" size={24} color={C.whitePrimary} />
                </TouchableOpacity>
                <Text style={[FontStyles.body, {paddingTop: 10, color: '#727378'}]}>{"Join"}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor: (selectedItem === 2)? '#ff742f': '#0e72ec'}]} onPress={() => setSelectedItem(2)}>
                    <FontAwesome name="calendar" size={24} color={C.whitePrimary} />
                </TouchableOpacity>
                <Text style={[FontStyles.body, {paddingTop: 10, color: '#727378'}]}>{"Schedule"}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor: (selectedItem === 3)? '#ff742f': '#0e72ec'}]} onPress={() => setSelectedItem(3)}>
                    <FontAwesome name="upload" size={24} color={C.whitePrimary} />
                </TouchableOpacity>
                <Text style={[FontStyles.body, {paddingTop: 10, color: '#727378'}]}>{"Share screen"}</Text>
            </View>
        </View>
    );
}

export default MenuButtons;
//-------------------------------------------------------------------
// Default props for the component (type, annotation, valid1, valid2)
MenuButtons.defaultProps = {

}; 
//-------------------------------------------------------------------
// StyleSheet for the components that were used
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    borderBottomColor: '#edeef1',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    //backgroundColor: '#0e72ec',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    elevation: 2
  },
  text: {
    position: 'relative',
    left: 8,
    //flex: 1,
    textAlignVertical: 'center',
    justifyContent: 'center',
    color: '#000000',
    width: '100%'
  },
  styleBox: {
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    elevation: 2
  },
});