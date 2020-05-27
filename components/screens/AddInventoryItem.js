import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput, Platform } from 'react-native';
import React, { Component } from 'react';

class AddInventoryItem extends Component{
    constructor(){
      super();
    }
    render(){
      const {navigation} = this.props;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is add inventory item page</Text>
          <Button
            title="Go to Inventory"
            onPress={() => {navigation.navigate('Inventory')}}
          />
        </View>
      )
    }
}

export default AddInventoryItem;