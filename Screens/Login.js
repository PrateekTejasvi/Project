import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input, Icon } from 'react-native-elements';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';
import { TextInput } from 'react-native-gesture-handler';

const screen = Dimensions.get('screen')


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("HomeScreen");
            }

        })
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
        }).catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.background}>
            <ImageBackground source={require('../assets/properbg.jpg')} style={styles.image_container} />

            <View style={{ flex: 1, position: 'relative', bottom: screen.width / 3 }}>
                <Text style={styles.greeting}>
                    {new Date().getHours() < 12 ? "Good Morning\n" : "Good Evening\n"}
                </Text>

                <Text style={styles.text_header}>Login</Text>


            </View>
            <View style={{ flexDirection: 'row', width: screen.width / 1.4, bottom: 50, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="mail" size={20} color="black" style={{ marginRight: 5, marginBottom: 15 }} />
                <Input placeholder='Email' placeholderTextColor={"black"} autoFocus autoCapitalize='none' type="email" value={email} onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={{ flexDirection: 'row', width: screen.width / 1.4, bottom: 45, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="ios-lock-closed" size={20} color="black" style={{ marginRight: 5, marginBottom: 15 }} />
                <Input placeholder='Password' placeholderTextColor={"black"} autoCapitalize='none' type="Pasword" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.login} onPress={signIn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>



            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 60 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> alert("Hahah doesn't work")}>
                    <Icon style={tw`p-2 bg-white rounded-full w-20  mr-5`} name="apple1" color="black" type="antdesign" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>alert("Doesnt work either")}>

                    <Icon style={tw`p-2 bg-white rounded-full w-20 mr-5`} name="google" color="black" type="antdesign" />

                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>alert("you think this one would work")}>
                    <Icon style={tw`p-2 bg-white rounded-full w-20`} name="facebook-square" color="black" type="antdesign" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ padding: 2,width:screen.width,height:screen.height,position:'absolute',top:screen.height/1.1,paddingTop:10,}} type="outline" onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>

            <View style={{ height: 100 }} />

        </KeyboardAvoidingView>


    )

}

const styles = StyleSheet.create({
    image_container: {
        height: screen.height,
        width: screen.width,
        flex: 1,
        position: 'relative',
        resizeMode: 'strech'
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greeting: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    text_header: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 0,

    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screen.width / 1.5,
        bottom: 150,
    },
    login: {
        width: screen.width / 2,
        backgroundColor: 'black',
        alignItems: 'center',
        bottom: screen.height / 20,
        padding: 2
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    textRegister: {
        fontSize: 17,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },

})


export default Login;