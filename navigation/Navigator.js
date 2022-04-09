import React from "react"

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/category/CategoriesScreen";
import CategoryMealsScreen from "../screens/category/CategoryMealsScreen";
import CreateCategoryScreen from "../screens/category/CreateCategoryScreen";
import CreateMealScreen from "../screens/meal/CreateMealScreen";
import MealScreen from "../screens/meal/MealScreen";
import MealsScreen from "../screens/meal/MealsScreen";
import { DrawerContent } from "./DrawerContent";
import { HomeTabNavigator } from "./BottomTabNavigator";

/** Stacks Navigations  */
const CategoriesStackNavigator = createStackNavigator();
export const CategoriesNavigator = () => {
  return (
    <CategoriesStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <CategoriesStackNavigator.Screen name='All Categories' component={CategoriesScreen} />
      <CategoriesStackNavigator.Screen name='Category' component={CategoryMealsScreen} />
      <CategoriesStackNavigator.Screen name='Create' component={CreateCategoryScreen} />
    </CategoriesStackNavigator.Navigator>
  );
}

const MealsStackNavigator = createStackNavigator();
export const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MealsStackNavigator.Screen name='All Meals' component={MealsScreen} />
      <MealsStackNavigator.Screen name='Meal' component={MealScreen} />
      <MealsStackNavigator.Screen name='Create' component={CreateMealScreen} />
    </MealsStackNavigator.Navigator>
  );
}







/** for the admin USER */

/** Drawer Navigation  */
const DrawerNavigator = createDrawerNavigator();

  
 export const MealNavigator = () => 
 (
    <DrawerNavigator.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown: false}} >
    <DrawerNavigator.Screen name='Dashboard' component={HomeTabNavigator}/>
    <DrawerNavigator.Screen name='Categories' component={CategoriesNavigator}/>
    <DrawerNavigator.Screen name='Meals' component={MealsNavigator}/>
    </DrawerNavigator.Navigator>
);


/** For The Guest USER */