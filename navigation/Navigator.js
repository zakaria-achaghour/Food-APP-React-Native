import React, {useState, useContext} from "react"
import { Avatar, BottomNavigation, BottomNavigationTab, Button, Divider, Drawer, DrawerItem, Icon, IndexPath, Layout, Text, Toggle } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../Config/theme-context";

import CategoriesScreen from "../screens/category/CategoriesScreen";
import CategoryMealsScreen from "../screens/category/CategoryMealsScreen";
import CreateCategoryScreen from "../screens/Admin/CreateCategoryScreen";
import CreateMealScreen from "../screens/Admin/CreateMealScreen";
import MealScreen from "../screens/meal/MealScreen";
import MealsScreen from "../screens/meal/MealsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/user/FavoritesScreen";
import CartScreen from "../screens/Shop/CartScreen";
import OrderScreen from "../screens/Shop/OrderScreen";
import ProfileScreen from "../screens/user/ProfileScreen";

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

const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerSHown: false}}>
      <HomeStackNavigator.Screen name='Home' component={HomeScreen} />
      <HomeStackNavigator.Screen name='Meal' component={MealScreen} /> 
     
    </HomeStackNavigator.Navigator>
  );
}

/** Bottom Navigation  */

const BottomNav = createBottomTabNavigator();
const UserMdIcon = (props) => (
  <Icon {...props} name='user-md' pack='FontAwesome'/>
);
const HospitalUserIcon = (props) => (
  <Icon {...props} name='hospital-user' pack='FontAwesome5'/>
);
const UserIcon = (props) => (
  <Icon {...props} name='user-o' pack='FontAwesome'/>
);
const HospitalIcon = (props) => (
  <Icon {...props} name='hospital' pack='FontAwesome5'/>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation  selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' icon={state.index ==0 ? UserMdIcon: UserIcon} />
      <BottomNavigationTab title='Favorites' icon={state.index ==1 ?HospitalUserIcon:HospitalIcon} />
      <BottomNavigationTab title='Carts' icon={state.index ==1 ?HospitalUserIcon:HospitalIcon} />
      <BottomNavigationTab title='Orders' icon={state.index ==1 ?HospitalUserIcon:HospitalIcon} />
      <BottomNavigationTab title='Profile' icon={state.index ==1 ?HospitalUserIcon:HospitalIcon} />
    </BottomNavigation>
  );
  
  const HomeTabNavigator = () => (
    <BottomNav.Navigator tabBar={props => <BottomTabBar {...props} />} >
      <BottomNav.Screen name='Overview' component={HomeNavigator}options={{headerShown: false,  }}/>
      <BottomNav.Screen name='Favorites' component={FavoritesScreen} options={{headerShown: false,}}/>
     <BottomNav.Screen name='Carts' component={CartScreen}options={{headerShown: false,  }}/>
     <BottomNav.Screen name='Orders' component={OrderScreen} options={{headerShown: false,}}/>
      <BottomNav.Screen name='Profile' component={ProfileScreen} options={{headerShown: false,}}/>
    </BottomNav.Navigator>
  );

/** end  Bottom Navigation  */




/** for the admin USER */

/** Drawer Navigation  */
const DrawerNavigator = createDrawerNavigator();

const Header = (props) => (
    <>
        <Layout style={{ height: 150,flexDirection: 'row',alignItems: 'center'}}>
        <Avatar style={{ margin: 8 }} size='giant' source={require('../assets/user.png')}/>
            <Layout style={{marginLeft: 15,flexDirection:'column' }}>
                <Text>test</Text>
            </Layout>
        </Layout>
        <Divider/>
    </>
  );
  
const Footer = (props) => {
        const themeContext = useContext(ThemeContext);
        const [activeChecked, setActiveChecked] = useState(false);
    
        const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
        themeContext.toggleTheme();
        };
    return (
    <React.Fragment>
      <Divider/>
      <Layout style={{ height: 150, margin: 5}}>
        <Layout style={{ flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
            <Toggle
              style={{margin: 5}}
              checked={activeChecked}
              onChange={onActiveCheckedChange}>
              Dark
            </Toggle>
         </Layout>
      <Divider/>
         <Layout style={{ flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
            <Button  status='warning' accessoryRight={(props)=><Icon {...props} name='log-out-outline'/>}>
            LOGOUT 
            </Button>
         </Layout>
    </Layout>
    </React.Fragment>
  )};
  
  const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
  );
  
  const HomeIcon = (props) => (
    <Icon {...props} name='home'/>
  );

  const EyeIcon = (props) => (
    <Icon {...props} name='eye-outline'/>
  );

  const DrawerContent = ({ navigation, state }) => (
      
    <Layout style={{flex: 1}}>
        <Drawer
            header={Header}
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => navigation.navigate(state.routeNames[index.row])}
            footer={Footer}>
        <DrawerItem
          title='Home'
          accessoryLeft={HomeIcon}
          accessoryRight={ForwardIcon}
        />
        <DrawerItem
          title='Categories'
          accessoryLeft={EyeIcon}
          accessoryRight={ForwardIcon}
        />
          <DrawerItem
          title='Meals'
          accessoryLeft={EyeIcon}
          accessoryRight={ForwardIcon}
        />
      </Drawer>
    </Layout>
  );
  
 export const MealNavigator = () => 
 (
    <DrawerNavigator.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown: false}} >
    <DrawerNavigator.Screen name='Dashboard' component={HomeTabNavigator}/>
    <DrawerNavigator.Screen name='Categories' component={CategoriesNavigator}/>
    <DrawerNavigator.Screen name='Meals' component={MealsNavigator}/>
    </DrawerNavigator.Navigator>
);


/** For The Guest USER */