import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Input, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {

    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <TouchableOpacity style={styles.image} onPress={() => {Linking.openURL('https://google.com')}}>
            <Image
                source={require('../assets/Logo.png')}
                style={{ width: 200, height: 200,alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}} />
           </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus autoCapitalize="none" type='Email' value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' autoCapitalize="none" type='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            <TouchableOpacity style={tw `p-2 bg-black mt-4 w-40 mb-3`} onPress={signIn}> 
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:2,wdith:30,marginTop:4}} onPress={() => navigation.navigate('Register')}> 
            <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>
            <View style={{ height: 175}} />
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:0.5,
        backgroundColor: 'white',
        padding:100
    },
    inputContainer: {
        width:300
    },
    button: {
        width: 200,
        marginTop: 10,
        color:'black'
     
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
    textRegister :{
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:17
    },
    image :{
        width:200,
        height:200
    }
});

export default Login;


