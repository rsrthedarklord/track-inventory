import React, { Component } from 'react';
import AppNavigationContainer from './router/Router';
import {SafeAreaView, Platform } from 'react-native';
import {Provider} from 'react-redux';

import store from './store/Store';

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
        <Provider store={store}>
          <AppNavigationContainer />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;