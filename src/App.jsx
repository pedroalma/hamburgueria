import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


import UserListm from './views/UserListm';




const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserListm"
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:"#f4511e"
                    },
                    headerTintColor:"#fff",
                    headerTintleStyle:{
                        fontWeight:'bold'
                    }
                }
            }>
            <Stack.Screen
            name="UserList"
            component={UserListm}
            options={({ navigation}) =>{
                return{
                    title: "Cardapio",
                }
            }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}