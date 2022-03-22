import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MealNavigator } from './Navigator';


const Appnavigator = () => {
    return (
        <NavigationContainer>
          <MealNavigator />
        </NavigationContainer>
    );
}


export default Appnavigator;
