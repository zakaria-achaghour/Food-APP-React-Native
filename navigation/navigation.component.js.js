import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home.component';
import { DetailsScreen } from '../screens/details.component';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';
import { ImageBackground, StyleSheet,View } from 'react-native';
import { Avatar, Divider, Drawer, DrawerItem, Icon,Layout, Text, IndexPath, Button, Toggle,BottomNavigation, BottomNavigationTab,TopNavigation,TopNavigationAction } from '@ui-kitten/components';
import { ThemeContext } from '../Config/theme-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from "@react-navigation/native";
const { Navigator, Screen } = createStackNavigator();

// const HomeNavigator = () => (
//   <Navigator screenOptions={{headerShown: false}}>
//     <Screen name='Home' component={HomeScreen}/>
//     <Screen name='Details' component={DetailsScreen}/>
//   </Navigator>
// );
const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);


const DrawerNav = createDrawerNavigator();
const Header = (props) => (
  <React.Fragment>
  
    <Layout style={styles.header}>
    <Avatar style={styles.avatar} size='giant'
        source={require('../assets/user.png')}
        
        />
        <Layout style={{marginLeft: 15, 
            flexDirection:'column' }}>
            <Text>test</Text>
        </Layout>
     
    </Layout>
    <Divider/>
  </React.Fragment>
);

const Footer = (props) => {
  const themeContext = useContext(ThemeContext);
  
  const [activeChecked, setActiveChecked] = React.useState(false);

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
            style={styles.toggle}
            checked={activeChecked}
            onChange={onActiveCheckedChange}>
            Dark
          </Toggle>
       </Layout>
    <Divider/>

       {/* <Button style={{margin:3}} status='warning' accessoryLeft={(props)=><Icon {...props} name='log-out-outline'/>}/> */}
       <Layout style={{ flexDirection: 'row',justifyContent: 'center',alignItems:'center'}}>
       <Button style={styles.button} status='warning' accessoryRight={(props)=><Icon {...props} name='log-out-outline'/>}>
        LOGOUT 
      </Button>
       </Layout>
        {/* <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button> */}
    </Layout>
  </React.Fragment>
)};

    const UsersScreen = () => {
      const navigation = useNavigation();
      const renderDrawerAction = () => (
        <TopNavigationAction
          icon={(style) => <Icon {...style} name="menu" />}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      );
    return (
          <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation
            title="Users"
            alignment="center"
            accessoryLeft={renderDrawerAction}
          />
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} level="4">
        <Text>users</Text>
        </Layout>
        </SafeAreaView>
        
    )};

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);





/**  bottom tab  */

const OrederTab = createBottomTabNavigator();
const NewScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>NEw</Text>
  </Layout>
);

const HistoScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Hosto</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='All' icon={PersonIcon}/>
    <BottomNavigationTab title='Hsito' icon={PersonIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <OrederTab.Navigator tabBar={props => <BottomTabBar {...props} />} 
   
 >
    <OrederTab.Screen name='All' component={NewScreen} options={{
            headerShown: false }}/>
    <OrederTab.Screen name='Histo' component={HistoScreen} options={{
            headerShown: false }}/>
  </OrederTab.Navigator>
);
/** drawer 
 * 
 */

const DrawerContent = ({ navigation, state }) => (
  // <Drawer
  //   selectedIndex={new IndexPath(state.index)}
  //   onSelect={index => navigation.navigate(state.routeNames[index.row])}>
  //   <DrawerItem title='Users' />
  //   <DrawerItem title='Orders' />
  // </Drawer>
  <Layout style={{flex: 1}}>

  <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}
      footer={Footer}>
      <DrawerItem
        title='Users'
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title='Orders'
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  </Layout>
);



export const DrawerNavigator = () => (
  <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown: false}} >
    <DrawerNav.Screen name='Users' component={UsersScreen}/>
    <DrawerNav.Screen name='Orders' component={TabNavigator}/>
  </DrawerNav.Navigator>
);




// export const DrawerAccessoriesShowcase = () => {

//   const [selectedIndex, setSelectedIndex] = React.useState(null);

//   return (
//     <Drawer
//       header={Header}
//       selectedIndex={selectedIndex}
//       onSelect={index => setSelectedIndex(index)}>
//       <DrawerItem
//         title='Users'
//         accessoryLeft={PersonIcon}
//         accessoryRight={ForwardIcon}
//       />
//       <DrawerItem
//         title='Orders'
//         accessoryLeft={BellIcon}
//         accessoryRight={ForwardIcon}
//       />
//     </Drawer>
//   );
// };

const styles = StyleSheet.create({
  header: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: 8,
  },
  toggle: {
    margin: 5,
  },
});
export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
);