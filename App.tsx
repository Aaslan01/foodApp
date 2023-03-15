/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningScreen from './screens/OpeningScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
 
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Opening">
          <Stack.Screen
            name="Opening"
            component={OpeningScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={DetailScreen}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}


export default App;
