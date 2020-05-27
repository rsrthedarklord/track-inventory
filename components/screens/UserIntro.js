import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput, Platform } from 'react-native';
import React, { Component } from 'react';

class UserIntro extends Component{
    constructor({navigation}){
      super();
    }
    render(){
      const {navigation} = this.props;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User Intro</Text>
          <Button
            title="Go to inventories page"
            onPress={() => {navigation.navigate('Inventories')}}
          />
        </View>
      )
    }
  }

  export default UserIntro;