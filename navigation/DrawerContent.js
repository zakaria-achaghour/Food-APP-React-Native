import React , {useContext, useState} from 'react'
import { Avatar, Button, Divider, Drawer, DrawerItem, Icon, Layout, Text, Toggle,IndexPath } from '@ui-kitten/components';
import { ThemeContext } from '../Config/theme-context';

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

 export const DrawerContent = ({ navigation, state }) => (
      
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