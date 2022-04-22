import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
//import * as ImageManipulator from 'expo-image-manipulator';
//import { SaveFormat } from 'expo-image-manipulator';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.04);

//export default function Cam({ width }: { width: number}) {
const CamShot = props => {

//export default function Cam({ width }: { width: number}) {//
  
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  useEffect(() => {
    console.log(`Camera disabled: ${props.cameraDisabled}`);
  }, [props.cameraDisabled]);
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  if(props.cameraDisabled === true){
    return <View />
  }
  const onCameraReady = async() => {
    setIsCameraReady(true);
    const listSizes = await cameraRef.current.getAvailablePictureSizesAsync('16:9');
    console.log(listSizes); 
  };
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: true, exif: true };
      const data = await cameraRef.current.takePictureAsync(options);
      var aspectRatio = 1;
      var source = null;
      if(Platform.OS === 'web'){
        aspectRatio = data.exif.aspectRatio;
        source = data.base64;
        props.onCapture(source, aspectRatio);
      }
      else{
        await Image.getSize(`data:image/png;base64,${data.base64}`, (width, height) => {
          aspectRatio=height/width;
          source=data.base64;
          props.onCapture(source, aspectRatio);
        });
      }
      if (source !== null) {
        setIsPreview(false);
      }

    }
  };
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    //setIsCameraDisabled(false);
  };


  return (
    <View style={[styles.container,{width:props.width}]}>
      <Camera 
        style={[styles.camera,{width:props.width, height:props.height}]} 
        type={cameraType}
        autoFocus={"on"}
        ref={cameraRef}
        pictureSize={"1280x720"}
        onCameraReady={onCameraReady}
      >
        {!isPreview && (
        <View style={[styles.buttonContainer,]}>
          <TouchableOpacity
            style={[styles.changeCam]}
            onPress={() => {
              setCameraType(
                cameraType === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/*<Text style={styles.text}> Flip </Text>*/}
            <Ionicons name='camera-reverse-outline' size={CAPTURE_SIZE} color='white' />
          </TouchableOpacity>
          

        </View>
        )}
      </Camera>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
              activeOpacity={0.7}
              disabled={!isCameraReady}
              onPress={onSnap}
              style={styles.capture}
        />
      </View>
      
    </View>
  );
}

export default CamShot;
//-------------------------------------------------------------------
// Default props for the component (defaultValue)
CamShot.defaultProps = {
  cameraDisabled: false
};
//-------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 0,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  button2: {
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  capture: {
    backgroundColor: '#ffffff',
    height: CAPTURE_SIZE+48,
    width: CAPTURE_SIZE+48,
    borderRadius: Math.floor(CAPTURE_SIZE+40 / 2),
    marginTop:8,
    marginBottom: 4,
    marginHorizontal: 10,




  },
  changeCam: {
    backgroundColor: 'transparent',
    
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    
    marginBottom: 10,
    marginHorizontal: 10
  }
});