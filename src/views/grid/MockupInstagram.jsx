import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Icon, Image } from '@rneui/base';

export default function MockupInstagram(props){
    const {backgroundColor}= props;
    return(
            <View style={{flexDirection: 'row', marginHorizontal: 8, backgroundColor:backgroundColor}}>
            <Avatar
            rounded
            size={64}
            title='KH'
            containerStyle={styles.avatar}
            />
            <Avatar
            rounded
            size={64}
            title='KH'
            containerStyle={styles.avatar}
            />
            <Avatar
            rounded
            size={64}
            title='KH'
            containerStyle={styles.avatar}
            />
        </View>
      
    )
}

const styles = StyleSheet.create({
    avatar:{
        marginHorizontal: 8,
        backgroundColor: 'red',
      },
});