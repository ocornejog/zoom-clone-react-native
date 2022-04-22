import { StyleSheet, Dimensions } from 'react-native';
import C from './mainColors';
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container1: {
        backgroundColor: C.whitePrimary,
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        //alignItems: 'center',
        //justifyContent: 'center'
        //padding: 16
    },
    logo: {
      height: 200,
      width: '100%',
      //width: 250,
      alignSelf:'center',
      resizeMode: 'contain'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
      
    },
    containerV: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      alignSelf:'center',
      backgroundColor : C.whitePrimary,
    },
    containerH: {
      
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    containerImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 293,
      height:380,
      
    },
    containerMeetingBox: {

    },
    box1: {
      alignItems: 'flex-start',
      width:'100%'
      //backgroundColor: 'rgba(150, 150, 150, 0.1)',
      
    },
    boxR: {
      alignItems: 'flex-end',
      //backgroundColor: 'rgba(150, 150, 150, 0.1)',
    },
    boxSpace: {
      height: 10,
    },
    header: {
      alignSelf: 'center', 
      //color: C.blueLogo,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    primaryBoton: {
      height: 64,
      margin: 0, //space extern to others objects
      padding: 0, //space intern to ins container
      borderWidth: 1,
      backgroundColor: C.bluePrimary,
      borderColor: '#CCCCCC',
      color: 'black',
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:8,
      borderRadius:44
    },
    primaryBotonText: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      
    },
    secondaryBoton: {
      marginTop: 4,
      height: 64,
      marginBottom:8,
      textAlign: 'center',
      alignSelf: 'center',
    },
    secondaryBotonText: {
      color: C.bluePrimary,
      fontSize: 24,
      fontWeight: 'bold',
    },

    input: {
      
      height: 48,
      width: '100%',
      margin: 0, //space extern to others objects
      padding: 0, //space intern to ins container
      borderWidth: 1,
      backgroundColor: '#ffffff',
      borderColor: '#CCCCCC',
      color: 'black',
      paddingHorizontal: 8,
      marginBottom: 8,
    },

    input2: {
      height: 50,
      margin: 0, //space extern to others objects
      padding: 0, //space intern to ins container
      borderWidth: 1,
      backgroundColor: '#ffffff',
      color: 'black',
      fontSize:20
    },
    titleInput: {
      color: C.bluePrimary,
      fontSize: 24,
      marginBottom: 8,
      fontWeight: 'bold',
    },
    checkBox: {
      height: 50,
      margin: 0,
      borderWidth: 1,
      borderColor: 'black'
    },
    onePicker: {
      
      height: 50,
      borderWidth: 1,
    },
    onePickerItem: {
      
      height: 50,
      
    },
    touchable:{
      alignItems: 'center',
      justifyContent: 'center',
      margin:2
    },
    textBoton: {
      marginTop: 4,
      textAlign: 'right',
      alignSelf: 'flex-end',
      paddingRight:16
    },
    textBotonText: {
        color: C.bluePrimary,
        fontSize: 14,
        fontWeight: 'bold',
       
    },
    squareButton: {
      width:80, 
      height:80, 
      backgroundColor: C.whitePrimary, 
      borderColor: C.bluePrimary, 
      borderWidth: 3, 
      borderRadius: 10
    },
    alignHandV:{
      flex: 1, 
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center'
    },
    c0:{
      borderWidth: 3,
    },
    c1:{
      borderWidth: 3,
      borderColor: C.blueSecondary
    },
    c2:{
      borderWidth: 3,
      borderColor: C.bluePrimary
    },
    c3:{
      borderWidth: 3,
      borderColor: C.greenPrimary
    },
    c4:{
      borderWidth: 3,
      borderColor: C.orangePrimary
    },
    c5:{
      borderWidth: 3,
      borderColor: C.redPrimary
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    styleBox: {
      backgroundColor: C.whitePrimary,
      height: 56,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderColor: C.whitePrimary,
      shadowColor: '#00000033',
      shadowRadius: 10,
      elevation: 3,
      borderBottomColor: '#C4C4C4',
      position: 'relative',
      top: 8,
      width: '100%'
    },
    
    active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
    },
    add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
    },
    
  });

  export default Styles;