import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Button, TextInput, Platform, NativeModules } from 'react-native';
import React, { Component } from 'react';
import _ from 'underscore';
import NumericInput from 'react-native-numeric-input';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

function SingleInventoryItem({inventory, navigateToInventory}){
  return (
    <View style={itemStyles.container}>
      <View style={{}}>
        <Text style={{}}>
          Cumin seed
        </Text>
        <Text style={itemStyles.quantity}>
          <Text>2</Text>
          <Text>KG</Text>
          <Text> & </Text>
          <Text>250</Text>
          <Text>GM</Text>
        </Text>
        <Text style={{}}>
          Tuesday, May 26, 2020 10:37 PM
        </Text>
      </View>
      <View style={{}}>
        <NumericInput
              containerStyle={itemStyles.numericInputContainer} 
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
    </View>
  )
}

class Inventory extends Component{
    constructor(props){
      super(props);

      props.navigation.setOptions({headerTitle: "Some inventory",
      headerRight: () => (
        <TouchableOpacity
          style={styles.addInventoryButton}
          onPress={() => this.props.navigation.navigate('AddInventoryItem', {inventoryId: 2})}
        >
          <Ionicons name="ios-add-circle" size={30} color="#1F96F3" />
        </TouchableOpacity>
      )});

    }

    navigateToAddInventoryItem = () => {

    }

    render(){
      const {navigation} = this.props;
      let activeInventoryItems = _.filter(this.props.inventoryItems, function(item){
        return item.inventoryId = 1 && item.count;
      });

      let outOfStockInventoryItems = _.filter(this.props.inventoryItems, function(item){
        return item.inventoryId = 1 && !item.count; 
      });

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <Text>Active Inventory Items</Text>
            {!_.isEmpty(activeInventoryItems) ?
                (
                  <FlatList
                  data={activeInventoryItems}
                  renderItem={({ item }) => {
                    return (
                      <SingleInventoryItem
                      inventoryItem={item}
                      navigateToAddInventoryItem={this.navigateToAddInventoryItem}
                      />
                    )
                  }}
                  keyExtractor={item => item._id}
                />
                )
                :
                (
                  <View>
                  <Text>You don't have any active inventory item</Text>
                  <TouchableOpacity
                    style={styles.addInventoryItemButton}
                    onPress={() => this.props.navigation.navigate('AddInventoryItem')}
                  >
                    <Ionicons name="ios-add-circle" size={30} color="#1F96F3" />
                    <Text>Add New Inventory Item</Text>
                  </TouchableOpacity>
                </View>  
                )
              }
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Out of stock Inventory Items</Text>
            {!_.isEmpty(activeInventoryItems) ?
                (
                  <FlatList
                  data={activeInventoryItems}
                  renderItem={({ item }) => {
                    return (
                      <SingleInventoryItem
                      inventoryItem={item}
                      navigateToAddInventoryItem={this.navigateToAddInventoryItem}
                      />
                    )
                  }}
                  keyExtractor={item => item._id}
                />
                )
                :
                (
                  <View>
                  <Text>You don't have any out of stock inventory item</Text>
                </View>  
                )
              }
          </View>
        </View>
      )
    }
}

const styles = {
  container: {
    backgroundColor: "#6DA8FD",
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1
  },
  viewHolder: {
    selfAlign: 'center',
  },
  addInventoryItemButton: {
    paddingTop : 5,
    paddingBottom : 5,
    paddingLeft : 5,
    paddingRight : 5,
    marginRight: 5
  }
}

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#f7f5ed',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom:5,
    flexGrow:0,
    flexBasis: 'auto',
    alignContent: 'flex-start',
    
  },
  time: {
    fontStyle:'italic',
    fontSize:12
  },
  quantity:{

  },
  itemName:{

  },
  numericInputContainer:{
    ...Platform.select({
      web: { justifyContent: 'space-between'},
    }),
  }
});

export default Inventory;