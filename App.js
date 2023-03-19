//Main App
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from './Screens/homescreen';
import MapScreen from './Screens/MapScreen';
import Login from './Screens/Login';
import RegisterScreen from './Screens/RegisterScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
    const Stack = createStackNavigator();
    return (

        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{

                                headerTintColor: 'white',
                                headerStyle:styles.header, 
                                headerTitleStyle:{color:"white"},
                                headerTitle:"Sign in",
                                headerShown:false
                            }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{
                                headerTintColor: '#333333',
                                headerStyle:styles.header, 
                                headerTitleStyle:{color:"white"},
                                headerTitle:"Register",
                                headerShown:false
                            }}/>
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MapScreen"
                            component={MapScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor:"#4db2ec",
    }
});
