import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserIntro from '../components/screens/UserIntro';
import Inventories from '../components/screens/Inventories';
import AddInventory from '../components/screens/AddInventory';
import Inventory from '../components/screens/Inventory';
import AddInventoryItem from '../components/screens/AddInventoryItem';

const Stack = createStackNavigator();

class AppNavigationContainer extends Component{
    render(){
        return (
            <NavigationContainer>
            <Stack.Navigator
              initialRouteName = {'Inventories'}
            >
              <Stack.Screen
                name="UserIntro"
                component={UserIntro}
                options={{ title: 'Welcome' }}
              />
              <Stack.Screen name="Inventories" component={Inventories} />
              <Stack.Screen name="AddInventory" component={AddInventory} />
              <Stack.Screen name="Inventory" component={Inventory} />
              <Stack.Screen name="AddInventoryItem" component={AddInventoryItem} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
}

export default AppNavigationContainer;