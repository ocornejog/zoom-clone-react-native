import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

//export default function Cam({ width }: { width: number}) {
const MeetingRoomCheckBox = props => {
    //-----------------------------------------------------------
    // Hooks for the attributes
    const [check, setCheck] = useState(false);
    //-----------------------------------------------------------
    // Functions to assign data to Hooks
    const changeCheckBox = () => {
        setCheck(!check);
        props.onCheck(!check);
    };
    return (
        <View style={styles.styleBox}>
            <View style={styles.container2}>
                <Text style={[FontStyles.bodyBig, styles.text]}>{props.label}</Text>
                <Switch
                  trackColor={{ false: C.greyLogo, true: C.blueLogo }}
                  thumbColor={(check === true)? C.whitePrimary : C.whitePrimary}
                  ios_backgroundColor={C.greyLow}
                  onValueChange={changeCheckBox}
                  value={check}
                />
            </View>
        </View>
    );
}

export default MeetingRoomCheckBox;
//-------------------------------------------------------------------
// Default props for the component (type, annotation, valid1, valid2)
MeetingRoomCheckBox.defaultProps = {
    label: 'Video on'
}; 
//-------------------------------------------------------------------
// StyleSheet for the components that were used
const styles = StyleSheet.create({
  container2: {
    //flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 2
  },
  text: {
    position: 'relative',
    //left: 8,
    //flex: 1,
    textAlignVertical: 'center',
    justifyContent: 'center',
    color: '#000000',
    width: '100%'
  },
  styleBox: {
    backgroundColor: C.whitePrimary,
    position: 'relative',
    width: '100%',
    elevation: 2
  },
});