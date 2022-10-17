//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

// create a component
const Story = props => {
    return (
        <TouchableOpacity activeOpacity={.5} onPress={props.onPress} style={styles.item}>
            <View style={[styles.border, { borderColor: !props.item.viewed ? '#0071d9' : 'gray'}]} >
            <Image source={{ uri: props.item.picture }} style={styles.picture} />
            </View>
            <Text numberOfLines={1} style={styles.title}>{props.item.name}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    title: {
        color: 'white',
        marginTop: 5,
        fontSize: 11.5,
        width: '100%'
    },
    picture: {
        width: 60,
        height: 60,
        borderRadius: 40,

    },
    border: {
        borderWidth: 3,
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginHorizontal: 5,
        alignItems: 'center',
        width: 75,
    }
});

//make this component available to the app
export default Story;
