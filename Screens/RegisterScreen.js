import { KeyboardAvoidingView, StyleSheet, View ,TouchableOpacity, Linking,ImageBackground,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Input,Button,Text} from 'react-native-elements'
import {useState,useLayoutEffect} from 'react';
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
        if(register){
            navigation.navigate('Login');
        }
    }
  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text h3 style={{marginBottom: 50,fontWeight:"bold",color:'white'}}> 
                         Create An Account
                 </Text>   
            <ImageBackground source={require('../assets/properbg.jpg')}
                resizeMode="center"
                style={styles.image_background}
                imageStyle={{ resizeMode: "cover", alignSelf: "flex-end" }} />
                   
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
    image_background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "relative",
        bottom: 100
    },
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        
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