

import React from 'react';

import { SignUp, SignIn, Otp } from "./src/screens/";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from "./src/screens/Home";
import Tabs from "./navigation/tabs";
import { Platform } from "react-native";
import { COLORS } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Otp" component={Otp} />

        <Stack.Screen name="Home" component={Tabs}

        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
