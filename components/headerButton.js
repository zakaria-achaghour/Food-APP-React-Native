import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

const CustomHeaderButton = props => {
    return (
    <HeaderButton 
    {...props}
     IconComponent={
       props.type =='Ionicons'?Ionicons:
       (props.type =='FontAwesome'?FontAwesome:
       (props.type =='FontAwesome5'?FontAwesome5:'')
        )} 
     iconSize={props.size}
     color={props.color}
   />);
};
export default CustomHeaderButton;