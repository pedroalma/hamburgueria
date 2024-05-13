import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Button } from '@rneui/themed'; 
import Icon from 'react-native-vector-icons/Ionicons';

import UserListm from './views/UserListm';
import UserForm from './views/UserForm';



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
                    title: "Lista de usuario ",
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('UserForm')}
                            type='clear'
                            icon={<Icon name="add" size={20} color="white"/>}
                        />
                    )
                }
            }}
            />
            <Stack.Screen
            name="UserForm"
            component={UserForm}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}