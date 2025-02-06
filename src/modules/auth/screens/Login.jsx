import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Image, Input, Button } from '@rneui/base'
import {isEmpty} from "lodash"
import { Icon } from '@rneui/base'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const {navigation} = props;
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError]=useState({email:'', password:''});
  const [showPassword, setShowPassword]=useState(true);

  const handleLogin=()=>{
    if(isEmpty(email) || isEmpty(password)){
      setError({
        email:"El correo electrónico es requerido",
        password:"La contraseña es requerida"
      });
    }else{
      setError({email:"", password:""});
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Iniciando: ", user);
          
          // ...
        })
        .catch((error) => {
          console.log("Error al iniciar sesion");
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
  return (
    <View style={styles.container}>
      <Image
      source={{uri:"https://cdn-icons-png.flaticon.com/512/10872/10872038.png"}}
      style={{width:50, height:50}}
      />
      <Input 
      placeholder='Correo electrónico'
      label="Correo Electrónico"
      keyboardType='email_address'
      inputContainerStyle={{width:'100%'}}
      onChange={({nativeEvent:{text}})=>setEmail(text)}
      errorMessage={error.email}
     />

    <Input 
      placeholder='Contraseña'
      label="Contraseña"
      inputContainerStyle={{width:'100%'}}
      secureTextEntry={showPassword}
      onChange={({nativeEvent:{text}})=>setPassword(text)}
      errorMessage={error.password}
      rightIcon={
        <Icon
          onPress={()=>setShowPassword(!showPassword)}
          type='material-community'
          name={showPassword?"eye-outline":"eye-off-outline"}
        />
      }
     />
     <Button title={"Iniciar sesión"} onPress={handleLogin}/>
     <Button title={"Crear cuenta"} type='clear' onPress={()=>navigation.navigate('CreateAccountStack')}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    }
})