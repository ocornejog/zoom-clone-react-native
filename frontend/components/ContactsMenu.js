import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, TextInput, Switch } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

const ContactsMenu = props => {
    //-----------------------------------------------------------
    // Hooks for the attributes
    
    //-----------------------------------------------------------
    // Functions to assign data to Hooks
    
    //-----------------------------------------------------------
    // Rendering the component ...
    return (
        <View style={styles.container}>
            {/*
            <View style={styles.rowContainer}>
                <View style={styles.starIcon}>
                    <AntDesign name="star" size={30} color="#737486" />
                </View>
                <Text style={[FontStyles.text, {color: '#23222f', paddingLeft: 8}]}>{"Starred"}</Text>
            </View>
            */}
            <View style={[styles.container2, {marginTop: 32}]}>
                <Image source={require('../assets/images/clouds.png')} style={{height: 200, width: 200, resizeMode: 'contain'}}/>
                <View style={{marginTop: 8}}>
                    <Text style={[FontStyles.text, {color: C.black, paddingLeft: 8}]}>{"Find people and start to talk with them!"}</Text>  
                </View>
            </View>
            <TouchableOpacity style={[styles.button, {marginTop: 48}]} onPress={() => console.log('Buttom for adding contacts pressed')}>
                <Text style={[FontStyles.textBold, {color: "#feffff"}]}>{"Add contacts"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ContactsMenu;
//-------------------------------------------------------------------
// Default props for the component (type, annotation, valid1, valid2)
ContactsMenu.defaultProps = {

}; 
//-------------------------------------------------------------------
// StyleSheet for the components that were used
const styles = StyleSheet.create({
  container: {

  },
  container2: {
    //flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 2
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  starIcon: {
    backgroundColor: '#f0eff4',
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
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
  button: {
    backgroundColor: '#0e72ec',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 150,
    alignSelf: 'center'
  }
});