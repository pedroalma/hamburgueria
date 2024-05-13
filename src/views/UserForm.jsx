import React ,{ useState } from "react";
import { Button, StyleSheet,Text,TextInput,View } from "react-native";

export default ({route,navigation})=>{
    const [user,setUser] = useState(route.params ? route.params : {} )
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                 style={style.input}
                 onChangeText={name => setUser({...user, name})}
                 placeholder="Informe o nome"
                 value={user.name}/>
            <Text>E-mail</Text> 
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})} 
                placeholder="Infome o e-mail"
                value={user.email}/>
            <Text>URL Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarURL => setUser({...user, avatarURL})}
                placeholder="Informe a URL do avatar"
                value={user.avatarURL}/>
            <Button
                
            />            
        </View>
    )
}

const style = StyleSheet.create(
    {
        form:{
            padding:12,
        },
        input:{
            height:40,
            borderColor:'gray',
            borderWidth:1,
            marginBottom:15,
        }
    }
)