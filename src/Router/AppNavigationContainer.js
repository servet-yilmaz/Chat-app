import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Chats from '../Screens/Chats';
import Friends from "../Screens/Friends";
import Talk from "../Screens/Talk";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(119, 146, 142)',
        background: 'rgb(11, 24, 31)',
        border: 'rgb(11, 24, 31)',

    },
};

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            tabBarActiveTintColor: '#0071d9',
            tabBarStyle: {
                backgroundColor: '#051014',
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
            },
        }}
            initialRouteName="Chat">
            <Tab.Screen options={{
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Chat"
                component={Chats}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "people" : "people-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Friends"
                component={Friends}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "compass" : "compass-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Explore"
                component={Friends}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon
                        name={focused ? "person" : "person-outline"}
                        color={color}
                        size={size}
                    />
                ),
            }} name="Profile"
                component={Chats}
            />
        </Tab.Navigator>

    )
}

const AppNavigationContainer = () => {
    return (
        <NavigationContainer theme={MyTheme} independent={true}>
            <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false, animation: "slide_from_right" }}>

                <Stack.Screen options={{ headerShown: false }} name="index" component={TabBar} />
                <Stack.Screen options={{ headerShown: false }} name="Talk" component={Talk} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationContainer;