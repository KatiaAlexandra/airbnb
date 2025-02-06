import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Avatar, Button} from '@rneui/base'
import { getAuth } from "firebase/auth";


export default function Profile() {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);

  return (
    <View style={styles.container}> 
      <View style={{flexDirection:'row', marginStart:16}}>
        <Avatar
            rounded
            size="large"
            source={user.photoURL?{uri:user.photoURL}:{uri:"https://randomuser.me/api/portraits/men/36.jpg"} }
        />
    <View style={{marginLeft:8, justifyContent:'center', alignItems:'flex-start'}}>
    <Text style={{fontWeight:'bold'}}>{user.displayName?user.displayName:'Sin nombre'}</Text>
    <Text>{user.email?user.email:'Anónimo'}</Text>
    </View>
      </View>
      <Button
        title={"Cerrar sesión"}
        onPress={()=>{
            auth.signOut();
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop: 64
    }
})