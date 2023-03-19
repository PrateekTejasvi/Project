import {Camera} from 'react-native-vision-camera'; 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CamScreen = () => {
  const devices = await Camera.getAvailableCameraDevices()
  console.log(devices.devices);
  return (
    <View>
      <Text>CamScreen</Text>
    </View>
  )
}

export default CamScreen

const styles = StyleSheet.create({})