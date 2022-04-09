import { Text,Card, Layout } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground, TouchableOpacity, View, Image , StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'


const Categorygridtile = (props) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
  
    return (
       <Layout style={styles.gridItem}>
            
        <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
            <ImageBackground source={props.image} resizeMode="cover"  style={styles.image}>
                <Text style={styles.title} numberOfLines={2}>{props.name} </Text>
            </ImageBackground>
            
           </TouchableCmp>
       
       </Layout>
    
    )
}

const styles = StyleSheet.create({
  
      image: {
         flex: 1,
          justifyContent: "center"
        // height: 35, width: 35, resizeMode: 'cover'
      },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        shadowColor: '#A2A3A7',
         overflow: 'hidden',
         elevation: 16
    },
   
    title: {
        fontSize: 19,
        marginTop:100,
        marginLeft: '35%',
        backgroundColor: "#00000000"
    }

});

export default Categorygridtile;
