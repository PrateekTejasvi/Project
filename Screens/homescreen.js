import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
import { useNavigation } from '@react-navigation/native';
//home screen
const HomeScreen = () => {
    const navigate = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
        <View style={tw`p-5`}> 
            <Image 
                style = {{
                    width: 120, 
                    height:120, 
                    resizeMode: "contain",
                }}
                source ={
                    
                   // uri:"https://links.papareact.com/gzs" //Top logo
                   require('../assets/Logo.png')
                }
             />
        <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    }
});

