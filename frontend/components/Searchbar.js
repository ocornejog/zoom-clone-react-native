import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';
import InputText from './InputText';
//import { Searchbar } from 'react-native-paper';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

const Searchbar = props => {
    //-----------------------------------------------------------
    // Hooks for the attributes

    const [searchText, setSearchText] = React.useState('');

    //-----------------------------------------------------------
    // Functions to assign data to Hooks
    
    //-----------------------------------------------------------
    // Rendering the component ...
    return (
        <View style={{paddingHorizontal: 20}}>
            <InputText
                label=''
                placeholder='Search'
                onChangeText={(value) => setSearchText(value)}
                value={searchText}
                keyboardType={'default'} 
                fontStyle = {'text'}
                autoCapitalize={'sentences'}
                icon={'magnify'}
            />
        </View>
    );
}

export default Searchbar;
//-------------------------------------------------------------------
// Default props for the component (type, annotation, valid1, valid2)
Searchbar.defaultProps = {
    
}; 
//-------------------------------------------------------------------
// StyleSheet for the components that were used
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eff4',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10
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