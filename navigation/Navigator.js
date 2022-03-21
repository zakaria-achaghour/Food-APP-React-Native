import React, {useState, useContext} from "react"
import { Avatar, BottomNavigation, BottomNavigationTab, Button, Divider, Drawer, DrawerItem, Icon, IndexPath, Layout, Text, Toggle } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../Config/theme-context";
import HomeScreen from "../screens/HomeScreen";
import  DocVisite from '../screens/visites/doctors/IndexScreen';
import  DocCreate from '../screens/visites/doctors/CreateScreen';
import  PharmaVisite from '../screens/visites/pharmacies/IndexScreen';
import  PharmaCreate from '../screens/visites/pharmacies/CreateScreen';

/** Stacks Navigations  */



/** Start Stack Vsisites Navigation  */
const VisiteDoctorStackNavigator = createStackNavigator();

export  const VisiteDoctorNavigator = () => {
    return (
      <VisiteDoctorStackNavigator.Navigator  screenOptions={{headerShown: false}}>
        <VisiteDoctorStackNavigator.Screen name='Doctors'  component={DocVisite} />
         <VisiteDoctorStackNavigator.Screen name='Create' component={DocCreate} />
      </VisiteDoctorStackNavigator.Navigator>
    )
  }

const VisitePharmacyStackNavigator = createStackNavigator();

export  const VisitePharmacyNavigator = () => {
    return (
      <VisitePharmacyStackNavigator.Navigator  screenOptions={{headerShown: false}}>
        <VisitePharmacyStackNavigator.Screen name='Pharmacies'  component={PharmaVisite} />
         <VisitePharmacyStackNavigator.Screen name='Create' component={PharmaCreate} />
      </VisitePharmacyStackNavigator.Navigator>
    )
  }
/** end Stacks Navigation  */



/** Bottom Navigation  */

const VisiteTab = createBottomTabNavigator();
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
      <BottomNavigationTab title='Doctors' icon={state.index ==0 ? UserMdIcon: UserIcon} />
      <BottomNavigationTab title='Pharmacies' icon={state.index ==1 ?HospitalUserIcon:HospitalIcon} />
    </BottomNavigation>
  );
  
  const VisiteTabNavigator = () => (
    <VisiteTab.Navigator tabBar={props => <BottomTabBar {...props} />} >
      <VisiteTab.Screen name='Doctors' component={VisiteDoctorNavigator}options={{headerShown: false,  }}/>
      <VisiteTab.Screen name='Pharmacies' component={VisitePharmacyNavigator} options={{headerShown: false,}}/>
    </VisiteTab.Navigator>
  );

/** end  Bottom Navigation  */






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
          title='Dashboard'
          accessoryLeft={HomeIcon}
          accessoryRight={ForwardIcon}
        />
        <DrawerItem
          title='Visites'
          accessoryLeft={EyeIcon}
          accessoryRight={ForwardIcon}
        />
      </Drawer>
    </Layout>
  );
  
 export const VisiteNavigator = () => 
 (
    <DrawerNavigator.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown: false}} >
    <DrawerNavigator.Screen name='Dashboard' component={HomeScreen}/>
    <DrawerNavigator.Screen name='Visites' component={VisiteTabNavigator}/>
    </DrawerNavigator.Navigator>
);