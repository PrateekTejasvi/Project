import { KeyboardAvoidingView, StyleSheet, View ,TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Input,Button,Text} from 'react-native-elements'
import {useState,useLayoutEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames'
import { auth } from '../firebase';


const RegisterScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Login",
        });
    },[navigation]);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [Phone,setPhone] = useState("");

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
            authUser.user.update({
                displayName:name,
            })
        })
        .catch((error) => alert(error.message)); 
    }
  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <StatusBar style='light'/>
          <Text h3 style={{marginBottom: 50,fontWeight:"bold",marginTop:50}}> 
            Create An Account
          </Text>
          <View style={styles.inputContainer}>
                <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={(text)=>setName(text)}/>
                <Input placeholder="Email" type='email' value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Phone No:" type="number" value={Phone }onChangeText={(text)=>setPhone(text)}/>
                <Input placeholder="Password" type="password" value={password} secureTextEntry onChangeText={(text)=>setPassword(text)} onSubmitEditing={register}/>
            </View> 
           <TouchableOpacity style={tw `p-2 bg-black mt-4 w-40 mb-3`} onPress={register}> 
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:2,wdith:30,marginTop:4}} onPress={() => {Linking.openURL('https://google.com/')}}> 
            <Text>Privacy Policy</Text>
            </TouchableOpacity>
           <View style={{height:150}} />

      </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor: 'white',
     
    },
    button:{
        width:200,
        marginTop:10, 


    },
    inputContainer:{
        width:300, 

    },
    text :{
        paddingTop:10,
        paddingBottom:10,
        color:'white', 
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:17
    },
      
})