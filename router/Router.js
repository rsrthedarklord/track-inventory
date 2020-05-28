import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserIntroReduxed from '../components/screens/UserIntroReduxed';
import InventoriesReduxed from '../components/screens/InventoriesReduxed';
import AddInventoryReduxed from '../components/screens/AddInventoryReduxed';
import InventoryReduxed from '../components/screens/InventoryReduxed';
import AddInventoryItemReduxed from '../components/screens/AddInventoryItemReduxed';

const Stack = createStackNavigator();

class AppNavigationContainer extends Component{
    render(){
        return (
            <NavigationContainer>
            <Stack.Navigator
              initialRouteName = {'Inventories'}
            >
              <Stack.Screen name="UserIntro" component={UserIntroReduxed} />
              <Stack.Screen name="Inventories" component={InventoriesReduxed} />
              <Stack.Screen name="AddInventory" component={AddInventoryReduxed} />
              <Stack.Screen name="Inventory" component={InventoryReduxed} />
              <Stack.Screen name="AddInventoryItem" component={AddInventoryItemReduxed} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
}

export default AppNavigationContainer;