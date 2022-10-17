//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

// create a component
const Messages = props => {
    return (
        <TouchableOpacity activeOpacity={.5} onPress={props.onPress} style={styles.item}>
            <Image source={{ uri: props.item.picture }} style={styles.picture} />
            <View style={styles.messageArea}>
            <Text numberOfLines={1} style={styles.title}>{props.item.name}</Text>
            <Text numberOfLines={1} style={styles.messageText}>{props.item.message}</Text>
            </View>
            <Text style={styles.time} >{props.item.time}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    messageArea:{
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        color: 'white',
        marginTop: 5,
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
    },
    messageText: {
        color: 'white',
        marginTop: 5,
        width: '100%'
    },
    picture: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    border: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginHorizontal: 5,
        alignItems: 'center',
        marginBottom: 20,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time:{
        color: 'rgb(119, 146, 142)'
    }
});

//make this component available to the app
export default Messages;
