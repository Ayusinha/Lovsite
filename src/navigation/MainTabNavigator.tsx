import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlanningScreen from '../screens/PlanningScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import ChatScreen from '../screens/ChatScreen';
import MoreScreen from '../screens/MoreScreen';

export type MainTabParamList = {
  Home: undefined;
  Planning: undefined;
  Shopping: undefined;
  Chat: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => (
  <Tab.Navigator>
    {/* Main tab navigation. Add icons and options as needed. */}
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Planning" component={PlanningScreen} />
    <Tab.Screen name="Shopping" component={ShoppingScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator; 