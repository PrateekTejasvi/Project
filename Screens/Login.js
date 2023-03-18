import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Animated, ImageBackground, Dimensions, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input, Icon } from 'react-native-elements';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';


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
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <ImageBackground source={require('../assets/properbg.jpg')}
                resizeMode="center"
                style={styles.image_background}
                imageStyle={{ resizeMode: "cover", alignSelf: "flex-end" }} />

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingTop: 70 }}>
                    <Text style={{ fontSize: 45, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>{new Date().getHours() < 12 ? "Good Morning!" : "GoodEvening!"} </Text>
                    <Text style={{ fontSize: 45, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingTop: 50 }}>Login</Text>
                </View>
            </View>

            <View style={{ paddingTop: 250, bottom: 350, position: 'absolute', width: 500 }}>
                <View style={styles.creds}>
                    <MaterialIcons name='alternate-email' size={20} color="#666" style={{ marginRight: 1 }} />
                    <Input placeholder='Email' autoFocus autoCapitalize="none" type='Email' value={email} onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.creds}>
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 1 }} />
                    <Input placeholder='Password' autoCapitalize="none" type='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                </View>

            </View>


            <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', paddingTop: Dimensions.get('screen').height / 1.4 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon style={tw`p-2 bg-white rounded-full w-20  mr-5`} name="apple1" color="black" type="antdesign" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>

                    <Icon style={tw`p-2 bg-white rounded-full w-20 mr-5`} name="google" color="black" type="antdesign" />

                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon style={tw`p-2 bg-white rounded-full w-20`} name="facebook-square" color="black" type="antdesign" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={signIn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 2, width: 300, marginTop: 30, bottom: 80, position: 'absolute' }} type="outline" onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textRegister}>Register</Text>
            </TouchableOpacity>


            <View style={{ bottom: 200, position: 'absolute', bottom: 210 }}>
                <Text style={{ color: '#223BC9', fontSize: 17, fontWeight: '700' }}>Or Sign Up With</Text>
            </View>
            <View style={{ height: 150 }} />
        </KeyboardAvoidingView>


    )

}

const styles = StyleSheet.create({
    image_background: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        position: "absolute",
        bottom: 0
    },
    creds: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        paddingBottom: 1,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0.5,
        backgroundColor: 'white',
        padding: 100,
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    text_forgot: {
        color: 'black'
    },
    textRegister: {
        fontSize: 17,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    loginbutton: {
        padding: 2,
        backgroundColor: '#223BC9',
        width: 350,
        marginBottom: 300,
        marginTop: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,

    },

})


export default Login;