import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { HomeScreen } from '../screens'

const RootStack = createStackNavigator()

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="HomeScreen" component={HomeScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}