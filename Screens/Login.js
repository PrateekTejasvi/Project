import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Input, Image } from 'react-native-elements';
//import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) { 
                navigation.replace("HomeScreen");
            }
        })
        return unsubscribe;
    },[])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email,password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged with with email and password')

        }).catch(error => alert(error.message));

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <TouchableOpacity style={styles.image} onPress={() => {Linking.openURL('https://google.com')}}>
            <Image
                source={require('../assets/bu.png')}
                style={{ width: 200, height: 200,alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}} />
           </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus autoCapitalize="none" type='Email' value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' autoCapitalize="none" type='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={signIn}> 
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:2,wdith:30,marginTop:4}} type="outline" onPress={() => navigation.navigate('Register')}> 
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
        color:'black',
        alignItems:'center',
        justifyContent:'center'
     
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
    loginbutton:{ 
        padding:2,
        backgroundColor:'#4db2ec', 
        marginTop:4,
        marginBottom:3,
        width:150,
        borderRadius:100
    }
});

export default Login;


//prateek_t6 