import React from "react";
import { View, FlatList, Alert, Text,Button } from 'react-native';
import users from "../data/users";
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";
import { StyleSheet } from "react-native";
 
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
            <ListItem  style={style.separar}>


        <Avatar source={{uri: user.avatarURL}}  style={style.img}  />
        <ListItem.Content>
            <ListItem.Title style={style.nome}>{user.nome}</ListItem.Title>
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
            <Button
                title="Continue"
                color={"#0A6847"}
            />  
        </View>
    )
}

const style = StyleSheet.create(
    {
        img:{
            width:70,
            height:70,
        },
        separar:{
          marginBottom:5,
          elevation:5,
          backgroundColor:'white',
        },
        nome:{
          fontSize:20,
        }
        }
    }
)