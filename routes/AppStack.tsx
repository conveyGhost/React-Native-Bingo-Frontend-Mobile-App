import * as React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Play from '../screens/PlayScreen';
import Login from '../screens/LoginScreen';
import Splash from '../screens/SplashScreen';
import Home from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splashScreen" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="playScreen" component={Play} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="loginScreen" component={Login} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;