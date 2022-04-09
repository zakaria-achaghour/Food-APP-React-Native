import {  Text, Layout, Icon, TopNavigationAction, TopNavigation, Button } from '@ui-kitten/components';
import React from 'react'
import { StyleSheet,  View,Image, TouchableWithoutFeedback, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon, HeartIcon, PlusIcon } from '../../Constants/Icons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
// import { BackIcon } from '../../Constants/Icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import CATEGORIES from '../../data/catgeories'
import { StatusBar } from 'expo-status-bar';

const CategoryMealsScreen = ({navigation, route}) => {
  const {itemId} = route.params;
const category = CATEGORIES.find(category => category.id = itemId);
  const renderBackAction = () => (
    <TopNavigationAction
      icon={<BackIcon />}
      onPress={() => navigation.goBack()}
    />
  );
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Layout style={{ flex: 1}} >

    <SafeAreaView>
      <TopNavigation style={styles.header} appearance={'control'}
          title={evaProps => <Text {...evaProps} style={{fontSize: 25, fontWeight: 'bold'}} >Details</Text>}
          accessoryLeft={renderBackAction}
          />
     <ScrollView showsVerticalScrollIndicator={false}>
        <Layout
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
          }}>
          <Image source={category.image} style={{height: 220, width: 220}} />
        </Layout>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {category.name}
            </Text>
            <View style={styles.iconContainer}>
              <HeartIcon style={{ width: 32, height: 32,}} />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            {/* <SecondaryButton title="Add To Cart" /> */}
            <Button style={{margin: 2}}   accessoryLeft={PlusIcon}/>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    </Layout>
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#D76635',

  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
  },
})