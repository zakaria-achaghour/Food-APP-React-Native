import { StyleSheet, View, Dimensions, Image } from 'react-native'
import React, {useRef} from 'react'
import { Button, Layout, Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
const SplashScreen = () => {
    const animatableRef = useRef(null);
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Animatable.Image  
      

        animation="bounceIn"
        duraton="1500"
        source={require('../../assets/images/bg1.jpg')} 
                style={styles.logo}
                resizeMode="stretch" />
     </View>
     <Animatable.View
    
     animation="fadeInUpBig"
     style={styles.footer} >
         <Text style={styles.title}>Explore Our Products ...</Text>
         <Text style={styles.text}>Sign in width account </Text>
         <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('Click')} >
                    <LinearGradient  
                        colors={['#FEF0DA','#FFA433']} 
                        style={styles.signIn}>
                            <Text style={styles.textSign} >Get Started {`  >`} </Text>
                           
                    </LinearGradient>
            </TouchableOpacity>

         </View>
     </Animatable.View>
    </View>
  )
}

export default SplashScreen
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FEF0DA'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
           backgroundColor: '#fff',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
          width: height_logo,
          height: height_logo
      },
      title: {
          color: '#FFA433',
          fontSize: 25,
          fontWeight: 'bold'
      },
      text: {
          color: 'grey',
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30
      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row'
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
      },
})