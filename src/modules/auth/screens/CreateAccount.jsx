import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Image, Input, Button } from '@rneui/base'
import {isEmpty} from "lodash"
import { Icon } from '@rneui/base'

export default function CreateAccount() {
   
   const [email, setEmail]= useState("");
   const [password, setPassword]= useState("");
   const [confirmPassword, setConfirmPassword]= useState("");
   const [error, setError]=useState({email:'', password:'', confirmPassword:''});
   const [showPassword, setShowPassword]=useState(true);
   const [showConfirmPassword, setShowConfirmPassword]=useState(true);
 
   const handleLogin=()=>{
     if(isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)){
       setError({
         email:"El correo electrónico es requerido",
         password:"La contraseña es requerida",
         confirmPassword:"La confirmación de contraseña es requerida"
       });
     }else if(password!=confirmPassword){
      setError({
        confirmPassword:"Las contraseñas deben de ser iguales"
      });
     }else{
       setError({email:"", password:"", confirmPassword:""});
       console.log("Correo:", email);
       console.log("Contraseña:", password);
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

      <Input 
       placeholder='Confirmación de contraseña'
       label="Confirmación de contraseña"
       inputContainerStyle={{width:'100%'}}
       secureTextEntry={showConfirmPassword}
       onChange={({nativeEvent:{text}})=>setConfirmPassword(text)}
       errorMessage={error.confirmPassword}
       rightIcon={
         <Icon
           onPress={()=>setShowConfirmPassword(!showConfirmPassword)}
           type='material-community'
           name={showConfirmPassword?"eye-outline":"eye-off-outline"}
         />
       }
      />

      <Button title={"Crear cuenta"} onPress={handleLogin}/>
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