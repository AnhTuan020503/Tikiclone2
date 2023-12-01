import React from 'react';
import'react-native-gesture-handler';
import { View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import HomeSectionComponent from './src/conponents/HomeSectionComponent';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Home" component={HomeSectionComponent}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;