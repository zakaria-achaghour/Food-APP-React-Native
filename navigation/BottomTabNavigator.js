import React from 'react'
import { View,TouchableWithoutFeedback } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, Text,Layout, IndexPath } from '@ui-kitten/components';
import { CartFillIcon, CartIcon, HeartFillIcon, HeartIcon, HomeFillIcon, HomeIcon, ShoppinIcon, UserFillIcon, UserIcon } from '../Constants/Icons';
import CartScreen from '../screens/Shop/CartScreen';
import OrderScreen from '../screens/Shop/OrderScreen';
import FavoritesScreen from '../screens/user/FavoritesScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import HomeScreen from "../screens/HomeScreen";
import MealScreen from '../screens/meal/MealScreen';
import { createStackNavigator } from '@react-navigation/stack';


const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerSHown: false}}>
      <HomeStackNavigator.Screen name='Home' component={HomeScreen} />
      <HomeStackNavigator.Screen name='Meal' component={MealScreen} /> 
    </HomeStackNavigator.Navigator>
  );
}
const BottomNav = createBottomTabNavigator();




const BottomTabBar = (props) => (
    <BottomNavigation  selectedIndex={props.state.index} appearance={'noIndicator'}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}
      style={{
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        }}
        >
      <BottomNavigationTab title='Orders' icon={ShoppinIcon} />
      <BottomNavigationTab title='Carts' icon={props.state.index ==1 ?CartFillIcon:CartIcon} />
      <BottomNavigationTab icon={(evaProps) =>(<TouchableWithoutFeedback onPress={() =>props.navigation.navigate('Overview') }  
      ><Layout  style={{
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A2A3A7',
        borderWidth: 2,
        borderRadius: 30,
        top: -25,
        elevation: 5,
  }}   ><HomeFillIcon {...evaProps}   /></Layout></TouchableWithoutFeedback>)}  />
      <BottomNavigationTab title='Favorites' icon={props.state.index ==3 ?HeartFillIcon:HeartIcon} />
      <BottomNavigationTab title='Profile' icon={props.state.index ==4 ?UserFillIcon:UserIcon} />
    </BottomNavigation>
  );
  
 export const HomeTabNavigator = () => (
     <BottomNav.Navigator tabBar={props => <BottomTabBar {...props} /> } initialRouteName={'Overview'}>
        <BottomNav.Screen name='Orders' component={OrderScreen} options={{headerShown: false,}}/>
        <BottomNav.Screen name='Carts' component={CartScreen} options={{headerShown: false,  }}/>
        <BottomNav.Screen name='Overview' component={HomeNavigator}options={{headerShown: false,  }}/>
        <BottomNav.Screen name='Favorites' component={FavoritesScreen} options={{headerShown: false,}}/>
        <BottomNav.Screen name='Profile' component={ProfileScreen} options={{headerShown: false,}}/>
    </BottomNav.Navigator>
  );