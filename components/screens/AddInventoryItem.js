import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput, Platform } from 'react-native';
import React, { Component } from 'react';
import NumericInput from 'react-native-numeric-input';
import RNPickerSelect from 'react-native-picker-select';

class AddInventoryItem extends Component{
    constructor(){
      super();
    }
    render(){
      const {navigation} = this.props;
      return (
        <View style={addItemStyles.container}>
          <Text>Hi, Please enter your item name</Text>
          <TextInput
            placeholder="Enter item name here"
            style={addItemStyles.nameInputBox}
          />
          <TextInput
            placeholder="Enter item description here"
            style={addItemStyles.nameInputBox}
          />
                      <View style={{flexDirection:'row'}}>
              <NumericInput
                    containerStyle={addItemStyles.numericInputContainer} 
                    value={5}
                    onChange={(value) => null }
                    totalWidth={120} 
                    totalHeight={30} 
                    iconSize={15}
                    step={1}
                    valueType='real'
                    textColor='#B0228C' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#EA3788' 
                    leftButtonBackgroundColor='#E56B70'
              />
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  style={{viewContainer:{alignSelf: 'center'}}}
                  placeholder={{label: 'Pick an Unit', value:null}}
                  items={[
                      { label: 'KG', value: 'KG' },
                      { label: 'Litre', value: 'LITRE' },
                      { label: 'Pieces', value: 'PIECES' },
                  ]}
              />
            </View>
          <Button title="Save inventory item" onPress={() => null} />
        </View>
      )
    }
}

const addItemStyles = StyleSheet.create({
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

export default AddInventoryItem;