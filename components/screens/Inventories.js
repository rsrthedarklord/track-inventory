import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, TextInput, Platform } from 'react-native';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import _ from 'underscore';


function SingleInventory({inventory, navigateToInventory}){
  return (
    <View style={{flexDirection:'row'}}>
      <View>
        <Text>{inventory.name}</Text>
        <View>
          <Text>+ {inventory.totalItems}</Text>
        </View>
        <Text>{moment(inventory.lastUpdatedAt).format('LLLL')}</Text> 
      </View>
      <View>
        <Button
          title="Go" 
          onPress={() => navigateToInventory(inventory._id)}
        >
          <Text style={{color:'#fff'}}>Go</Text>
        </Button>
      </View>
    </View>
  )
}



class Inventories extends Component{
    constructor(props){
      super(props);

      props.navigation.setOptions({headerTitle: "Ravindra's Inventories",
      headerRight: () => (
        <TouchableOpacity
          style={styles.addInventoryButton}
          onPress={() => this.props.navigation.navigate('AddInventory')}
        >
          <Ionicons name="ios-add-circle" size={30} color="#1F96F3" />
        </TouchableOpacity>
      )});

    }

    navigateToInventory = (inventoryId) => {
      this.props.navigation.navigate('Inventory', {inventoryId});
    }

    render(){
      const {navigation} = this.props;
      return (
        <View style={{ flex: 1}}>
          <View>
            <Text>Active Inventories</Text> 
            {!_.isEmpty(this.props.inventories.filter(inventory => inventory.status === "ACTIVE")) ?
                (
                  <FlatList
                  data={this.props.inventories.filter(inventory => inventory.status === "ACTIVE")}
                  renderItem={({ item }) => {
                    return (
                      <SingleInventory
                      inventory={item}
                      navigateToInventory={this.navigateToInventory}
                      />
                    )
                  }}
                  keyExtractor={item => item._id}
                />
                )
                :
                (
                  <View>
                  <Text>You don't have any active inventory</Text>
                  <TouchableOpacity
                    style={styles.addInventoryButton}
                    onPress={() => this.props.navigation.navigate('AddInventory')}
                  >
                    <Ionicons name="ios-add-circle" size={30} color="#1F96F3" />
                    <Text>Add New Inventory</Text>
                  </TouchableOpacity>
                </View>  
                )
              }
          </View>
          <View>
            <Text>Archived Inventories</Text>
            {!_.isEmpty(this.props.inventories.filter(inventory => inventory.status === "ARCHIVED")) ?
              (
                <FlatList
                data={this.props.inventories.filter(inventory => inventory.status === "ARCHIVED")}
                renderItem={({ item }) => {
                  return <SingleInventory inventory={item} />
                }}
                keyExtractor={item => item._id}
              />
              )
              :
              (
                <View>
                <Text>You don't have any archived inventory</Text>
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
  addInventoryButton: {
    paddingTop : 5,
    paddingBottom : 5,
    paddingLeft : 5,
    paddingRight : 5,
    marginRight: 5
  }
}

export default Inventories;