import React, { Component } from 'react';
import AppNavigationContainer from './router/Router';
import {SafeAreaView, Platform } from 'react-native';

class App extends Component{
  constructor () {
    super();
  }

  render(){
    return (
      <SafeAreaView
        style={{
          height: "100%",
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <AppNavigationContainer />
      </SafeAreaView>
    );
  }
}

export default App;