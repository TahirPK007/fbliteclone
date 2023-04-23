import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import HomeScreen from './HomeScreen';
import Main from './Main';
import Home from '../tabs/Home';
import Friends from '../tabs/Friends';
import Notification from '../tabs/Notification';
import Video from '../tabs/Video';
import Marketplace from '../tabs/Marketplace';
import Header from './Header';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Marketplace"
          component={Marketplace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
