import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, LogBox, ActivityIndicator, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Messages from '../Components/Messages';
import Story from '../Components/Story';
import Data from '../Data/FriendsData';

const Chats = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setData(Data.data);
        }, 1000);
    });

    const renderItem = ({ item }) => {
        return (
            <Story
                item={item}
                onPress={() => alert()}
            />
        );
    };

    const renderMessages = ({ item }) => {
        return (
            <Messages
                item={item}
                onPress={() => navigation.navigate("Talk", {item})}
            />
        );
    };

    return (
        <SafeAreaView>
            <View style={styles.search}>
                <Icon name='search' size={20} color={'rgb(119,146,142)'} />
                <TextInput style={styles.searchInput} placeholderTextColor={'rgb(119, 146, 142)'} placeholder='Search your chat' />
            </View>
            <Text style={styles.recentsText}>RECENTS UPDATE</Text>
            {
            
            data.length == 0 ? <ActivityIndicator size={'large'} /> :
            <FlatList
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{paddingHorizontal: 10}}
                
            />
        }
            <View style={styles.brace} />
            {
            
            data.length == 0 ? <ActivityIndicator size={'large'} /> :
            <FlatList
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderMessages}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{paddingHorizontal: 10}}
                
            />
        }
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#202d34',
        width: '90%',
        marginStart: '5%',
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        marginLeft: 10,
        color: 'rgb(119, 146, 142)',
        fontSize: 16,
        width: '90%',
        height: 45
    },
    recentsText: {
        color: 'white',
        fontSize: 16,
        marginStart: '5%',
        marginBottom: 10,
        marginTop: 20
    },
    brace:{
        borderBottomColor: '#202d34',
        borderBottomWidth: 2,
        width: '90%',
        borderRadius:100,
        marginStart: '5%',
        marginVertical: 20
    }
})


export default Chats;