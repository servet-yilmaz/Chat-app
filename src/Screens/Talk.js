//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import Data from '../Data/MessagesData.json';
import Icon from 'react-native-vector-icons/Ionicons';
import Message from '../Components/Message';
const userId = 6;

// create a component
const Talk = props => {
    const [messages, SetMessages] = useState('');
    const [messagesNew, SetmessagesNew] = useState('');
    const [text, SetText] = useState('');
    const item = props.route.params.item;
    const conversationId = item.id + "-" + 6;
    var data = Data.data.filter(function (pilot) {
        return pilot.conversation_id === conversationId;
    });

    if (!messages) {
        if (data) {
            SetMessages(data);
        }
    }
    const renderMessages = ({ item }) => {
        return (
            <Message
                item={item}
            />
        );
    };

    const scrollDown = () => {
        setTimeout(() => {
            if (listViewRef) {
                listViewRef.scrollToEnd({ animated: true, })
            }
        }, 400)
    }

    const newMessage = () => {
        let lastId = null;
        if (!messages.slice(-1)[0]) {
            lastId = 1
        } else {
            lastId = messages.slice(-1)[0].id + 1;
        }
        const newMessageF = {
            "id":lastId,
            "sender": userId,
            "reciver": item.id,
            "conversation_id": conversationId,
            "message": text,
            "time": "04.02"
        }
        SetMessages([...messages, newMessageF]);
        SetmessagesNew('');
        SetText('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topContent}>
                    <Icon onPress={() => props.navigation.pop()} name="chevron-back-outline" size={35} color="white" />
                    <View style={styles.topBarContainer}>
                        <Image source={{ uri: item.picture }} style={styles.picture} />
                        <View style={styles.messageArea}>
                            <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.statusText}>Online</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.brace} />
            </View>
            <View style={styles.center}>
                {
                    !messages.length > 0 ?
                        <View style={styles.noMessage}><Text style={styles.noMessageText} >No Message!</Text></View>
                        :
                        <FlatList
                            ref={(ref) => {
                                listViewRef = ref;
                            }}
                            overScrollMode='never'
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={messages}
                            style={{ paddingVertical: 10, marginVertical: 10 }}
                            renderItem={renderMessages}
                            keyExtractor={(item) => item.id}
                            onContentSizeChange={() => scrollDown()}
                        />


                }
            </View>
            <View style={styles.bottom}>
                <TextInput onPressIn={() => scrollDown()} editable={messagesNew.length == 0 ? true : false} onChangeText={(text) => { SetText(text); scrollDown() }} value={text} style={styles.input} multiline color={'white'} placeholderTextColor={'gray'} placeholder='Type Someting...' />
                <View pointerEvents={text.trim().length == 0 ? 'none' : 'auto'} style={[styles.send, { opacity: text.length == 0 ? .5 : 1 }]}>
                    <Icon style={styles.sendIcon} onPress={() => { SetmessagesNew(text); SetText(''); newMessage(); }} name="paper-plane" size={25} color="white" />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    topContent: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center'

    },
    messageArea: {
        paddingHorizontal: 15,
    },
    title: {
        color: 'white',
        marginTop: 5,
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusText: {
        color: '#67c84c',
        marginTop: 5,
        width: '100%'
    },
    picture: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    topBarContainer: {
        flexDirection: 'row',
        marginStart: 20
    },
    brace: {
        borderBottomColor: '#202d34',
        borderBottomWidth: 2,
        width: '90%',
        borderRadius: 100,
        marginStart: '5%',
    },
    center: {
        flex: 1,
        width: '90%',
        marginStart: '5%'
    },
    noMessage: {
        flex: 1,
        justifyContent: 'center',
    },
    noMessageText: {
        fontSize: 25,
        color: 'gray',
        textAlign: 'center',
        flexDirection: 'column'
    },
    bottom: {
        backgroundColor: '#202d34',
        marginBottom: 20,
        width: '90%',
        marginStart: '5%',
        borderRadius: 40,
        minHeight: 60,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        maxHeight: 150,
        marginStart: '5%'
    },
    send: {
        backgroundColor: '#0071d9',
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sendIcon: {
        transform: [
            { rotateZ: "45deg" }],
        paddingTop: 4,
        paddingRight: 5
    }

});

//make this component available to the app
export default Talk;
