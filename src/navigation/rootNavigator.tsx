import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './constants';
import { HomeScreen } from '../screens/Home';
import { ProductDetailsScreen } from '../screens/ProductDetails';
import { RootStackParamList } from './navigation.types';

const AuthorizedStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <AuthorizedStack.Navigator>
      <AuthorizedStack.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} options={{ headerShown: false }} />
      <AuthorizedStack.Screen
        name={SCREENS.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
        options={{ title: '' }}
      />
    </AuthorizedStack.Navigator>
  );
};
