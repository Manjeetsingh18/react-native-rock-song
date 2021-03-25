import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Details } from './containers';

const Stack = createStackNavigator();

function HomeExpoler() {
  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Details"} component={Details} />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <HomeExpoler />
      </NavigationContainer>
    );
  }
}