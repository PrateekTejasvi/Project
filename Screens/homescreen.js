import { SafeAreaView, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import Camera from './Camer';

//home screen
const HomeScreen = () => {
    const navigate = useNavigation();
    const signOut = () => {
        auth.signOut().catch(error => alert(error.message))
        if(signOut){
          navigate.replace("Login");
        }
       } 
       
  return (
      
    <SafeAreaView style={tw `bg-white h-full`}>
        <Camera/>
        <View style={tw`p-5`}> 
            <Image 
                style = {{
                    width: 120, 
                    height:120, 
                    resizeMode: "contain",
                }}
                source ={
                    
                   require('../assets/bu.png')
                }
             />
        <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection:'column',
        backgroundColor:'black'
    }
});

