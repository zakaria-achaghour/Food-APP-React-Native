import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { VisiteNavigator } from './Navigator';

const Appnavigator = () => {
    return (
        <NavigationContainer>
            <VisiteNavigator />
        </NavigationContainer>
    );
}


export default Appnavigator;
