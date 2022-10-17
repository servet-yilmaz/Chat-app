//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

const userId = 6;
// create a component
const Message = props => {
    const item = props.item;
    return (
        <TouchableOpacity activeOpacity={.5} onPress={props.onPress} style={item.sender == userId ? styles.itemMe : styles.itemYou} >
            <View style={item.sender == userId ? styles.messageAreaMe : styles.messageAreaYou}>
            <Text numberOfLines={1} style={styles.messageText}>{item.message}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    messageAreaMe:{
        backgroundColor: '#0070da',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    messageAreaYou:{
        backgroundColor: '#3d4648',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 0,
    },
   
    messageText: {
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 5,
        fontSize: 15
    },
    picture: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    itemMe: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemYou: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',

    },
    time:{
        color: 'rgb(119, 146, 142)'
    }
});

//make this component available to the app
export default Message;
