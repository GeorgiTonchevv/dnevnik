import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false}} name="login" component={LoginScreen}>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/*<Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Create Account" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})