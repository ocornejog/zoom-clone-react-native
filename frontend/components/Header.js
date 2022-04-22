import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, TextInput, Switch } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

const Header = props => {
    //-----------------------------------------------------------
    // Hooks for the attributes
    
    //-----------------------------------------------------------
    // Functions to assign data to Hooks
    
    //-----------------------------------------------------------
    // Rendering the component ...
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#ebebed" />
            <Text style={[FontStyles.textBold, {color: "#feffff"}]}>{"Meet & Chat"}</Text>
            <View style={{padding: 6, backgroundColor: "#5e5d6d", borderRadius: 5}}>
                <Entypo name="new-message" size={30} color="#ebebed" />
            </View>
        </View>
    );
}

export default Header;
//-------------------------------------------------------------------
// Default props for the component (type, annotation, valid1, valid2)
Header.defaultProps = {
    
}; 
//-------------------------------------------------------------------
// StyleSheet for the components that were used
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38394d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20
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
    backgroundColor: '#38394d',
    position: 'relative',
    width: '100%',
    elevation: 2,
    padding: 8
  },
});