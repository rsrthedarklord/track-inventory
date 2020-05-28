import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput, Platform } from 'react-native';
import React, { Component } from 'react';

class AddInventory extends Component{
    constructor(){
      super();
    }
    render(){
      const {navigation} = this.props;
      return (
        <View style={addInventoryStyles.container}>
          <Text>Hi, Please enter your inventory name</Text>
          <TextInput
            placeholder="Enter inventory name here"
            style={addInventoryStyles.nameInputBox}
          />
          <TextInput
            placeholder="Enter inventory description here"
            style={addInventoryStyles.nameInputBox}
          />
          <Button title="Save inventory" onPress={() => null} />
        </View>
      )
    }
}

const addInventoryStyles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  nameInputBox:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
    marginTop: '10%',
    marginBottom: '10%',
    width: '60%',
    fontSize: 16,
    paddingLeft:5,
    paddingRight: 5
  },
  numericInputContainer:{
    ...Platform.select({
      web: { justifyContent: 'space-between'},
    }),
  }
});

export default AddInventory;
