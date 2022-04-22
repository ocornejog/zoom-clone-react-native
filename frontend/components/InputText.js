import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import C from '../constants/mainColors';
import FontStyles from '../constants/mainTextFormats';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

//--------------------------------------------------------------------------
const InputText = props => {

  const [text, setText] = React.useState('');
  const [secureText, setSecureText] = React.useState(false);
  //const [type, setType] = useState();
  useEffect(() => {
    setSecureText(props.secureTextEntry);
  }, [props]);

  return (
    <View style={[styles.container]}>
        <TextInput style={[styles.input, FontStyles[props.fontStyle], {height: props.inputHeight}]} mode={'outlined'} placeholder={props.placeholder} onChangeText={props.onChangeText} label={props.label} 
        value={props.value} keyboardType={props.keyboardType} secureTextEntry={secureText} outlineColor={"#f0eff4"} autoCapitalize={props.autoCapitalize} 
        left={(props.icon !== '')?<TextInput.Icon name={`${props.icon}`}/>:(props.enablePasswordIcon === true)?<TextInput.Icon name={(secureText === false)?"eye-off":"eye"} onPress={()=>setSecureText(!secureText)}/>:undefined}
        theme={{colors:{...DefaultTheme.colors, primary: props.primaryColor, text: props.fontColor}, 
        fonts:{
          regular: {
            fontFamily: 'Lato_400',
            fontSize: 20,
            lineHeight: 24,
            letterSpacing: -0.408
          }
        }}}/>
    </View>
  );
}

export default InputText;
//-------------------------------------------------------------------------
InputText.defaultProps = {
  keyboardType: "default",
  secureTextEntry: false,
  fontStyle: "heading2",
  autoCapitalize: "sentences",
  enablePasswordIcon: false,
  icon: '',
  inputHeight: 48,
  primaryColor: C.blueLogo,
  fontColor: C.black
};
//-------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width:'100%',
  },
  input: {
    //height: 48,
    width: '100%',
    //margin: 0, //space extern to others objects
    //padding: 0, //space intern to ins container
    //borderWidth: 1,
    //backgroundColor: '#ffffff',
    //borderColor: '#CCCCCC',
    //color: 'black',
    //paddingHorizontal: 8,
    //marginBottom: 8,
  }
});