import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput, Platform, NativeModules } from 'react-native';
import React, { Component } from 'react';

class Inventory extends Component{
    constructor(){
      super();
    }
    render(){
      const {navigation} = this.props;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Inventory's items are here</Text>
          <Button
            title="Go to add Inventory Item"
            onPress={() => {navigation.navigate('AddInventoryItem')}}
          />
        </View>
      )
    }
}

export default Inventory;