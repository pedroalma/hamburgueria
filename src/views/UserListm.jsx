import React from "react";
import { View, FlatList, Alert, Text } from 'react-native';
import users from "../data/users";
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";
import { StyleSheet } from "react-native";
import UserForm from "./UserForm";
 
export default props => {
    function confirmUserinclu(user){
      Alert.alert('retirar pedido','Deseja não comprar ?',
      [{
        text:'Sim',
      },      
      {
        text: 'Não'
      }
    ]
      )
    }
    function confirmUsertirar(user){
        Alert.alert('incluir pedido','comprar ?',
        [{
          text:'Sim',
        },      
      ]
        )
      }
 
    function getUserItem({item: user}){
        return(
           <ThemeProvider>
            <ListItem>
        <Avatar Style={style.img} source={{uri: user.avatarURL}}/>
        <ListItem.Content>
            <ListItem.Title>{user.nome}</ListItem.Title>
            <ListItem.Title>{user.descricao}</ListItem.Title>
            <ListItem.Title>{user.preco}</ListItem.Title>
            <ListItem.Title>{user.desc}</ListItem.Title>
        </ListItem.Content>
 
          <ListItem.Chevron
          name="remove-circle"
          color="orange"
          size={25}
          onPress={() => confirmUserinclu(user)}
          />
          <Text>0</Text>
          <ListItem.Chevron
           name="add-circle"
           color="orange"
           size={25}
           onPress={() => confirmUsertirar(user)}
          />
          </ListItem>
          <Button
                title="Salvar"
                color={"#0A6847"}
                onPress={UserForm}
            />  
        </ThemeProvider>
       
        )
 
    }
 
    return(
        <View>
            <FlatList
              keyExtractor={user => user.id.toString()}
              data={users}
              renderItem={getUserItem}
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        img:{
            width:300,
            height:300,
        },
    }
)