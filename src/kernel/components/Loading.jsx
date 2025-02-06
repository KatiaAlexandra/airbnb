import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'

export default function Loading(props) {
    const{title, color, size, isVisible} = props
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.container} >
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size={size} color={color}/>
          <Text style={{marginTop:16}}>{title}</Text>
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'80%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:'#4abfa4',
        borderWidth:2
    },
    title:{
      color:'black',
      fontWeight:'bold',
      marginTop:16
    }
})