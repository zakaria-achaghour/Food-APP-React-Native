import { StyleSheet,  View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Divider, Icon, Layout, Text,  TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CATEGORIES from '../../data/catgeories'
import { ThemeContext } from '../../Config/theme-context';

const MealsScreen = (props) => {


  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={(style) => <Icon {...style} name="menu" />}
      onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  const renderCreateAction = () => (
    <TopNavigationAction
      icon={(style) => <Icon {...style} name="plus-outline" />}
      onPress={() => props.navigation.navigate('Create')}
    />
  );

  


  
  const ListCategories = (props) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const themeContext = useContext(ThemeContext);
    const [theme, setTheme] = useState('');
    useEffect(() => {
    setTheme(themeContext.theme);
    }, [themeContext,selectedCategoryIndex]);
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {CATEGORIES.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Layout
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                      ? '#F9813A'
                      : props.theme,
                
                ...styles.categoryBtn,
              }}>
              <Layout style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </Layout>
              <Text
                style={{
                  // fontSize: 15,
                  // fontWeight: 'bold',
                   marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? 'white' 
                      : '#F9813A',
                }}
                >
                {category.name}
              </Text>
            </Layout>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <TopNavigation
    title={evaProps => <Text {...evaProps}>Meals</Text>}
    alignment="center"
    accessoryLeft={renderDrawerAction}
    accessoryRight={renderCreateAction}
    />
    <Divider/>
    <Layout style={{ flex: 1 }}>
     <ListCategories />
    </Layout>
</SafeAreaView>
  )
}

export default MealsScreen

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    // backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})