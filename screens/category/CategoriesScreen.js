import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CATEGORIES from '../../data/catgeories'
import Categorygridtile from '../../components/CategoryGridTile'
import { Divider, Icon, Layout, TopNavigation,Text,DrawerActions, TopNavigationAction } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
const CategoriesScreen = (props) => {
  const navigation = useNavigation();
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={(style) => <Icon {...style} name="menu" />}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  const renderCreateAction = () => (
    <TopNavigationAction
      icon={(style) => <Icon {...style} name="plus-outline" />}
      onPress={() => props.navigation.navigate('Create')}
    />
  );
  const reanderGridItem = (itemData) => {
    return (<Categorygridtile 
                name={itemData.item.name}
                image={itemData.item.image}


                onSelect={() => {
                    props.navigation.navigate('Category', {
                        itemId:itemData.item.id
                    })
                }} />);
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
      title={evaProps => <Text {...evaProps}>Categories</Text>}
      alignment="center"
      accessoryLeft={renderDrawerAction}
      accessoryRight={renderCreateAction}
      />
      <Divider/>
      <Layout style={{ flex: 1 }}>
        <FlatList data={CATEGORIES} renderItem={reanderGridItem}  numColumns={2}/>
      </Layout>
  </SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})