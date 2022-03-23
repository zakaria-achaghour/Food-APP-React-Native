
import React, { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../App/features/category/categorySlice';

const HomeScreen = () => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch();
    // const navigation = useNavigation();
    // const renderDrawerAction = () => (
    //   <TopNavigationAction
    //     icon={(style) => <Icon {...style} name="menu" />}
    //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    //   />
    // );
    useEffect(() => {
      dispatch(getCategories())
    }, [dispatch]);
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Text>ghjklm</Text>
      {
        categories.map(cat => (
          <Text>{cat}</Text>
        ))
      }
        {/* <TopNavigation
            title={evaProps => <Text {...evaProps}>Dashboard</Text>}
            alignment="center"
            accessoryLeft={renderDrawerAction}
        />
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} level="4">
            <Text>Dahsboard</Text>
        </Layout> */}
    </SafeAreaView>
  )
}

export default HomeScreen
