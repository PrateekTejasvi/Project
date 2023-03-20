import {Camera} from 'react-native-vision-camera'; 
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const CamScreen = () => {
   const [cameraPermission,setCameraperms] = useState(); 

  useEffect(() => {
    (async() => {
      const cameraPermissonStatus = await Camera.requestCameraPermission();
      setCameraperms(cameraPermissonStatus);
    })();
  },[]);
  console.log(cameraPermission)
}

export default CamScreen

const styles = StyleSheet.create({})