import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const Profile = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}> 
            <Icon style = {{position:'absolute', alignSelf:'flex-end',marginTop:-5}} name="CarOutlined" color="black" type="antdesign"/>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

})