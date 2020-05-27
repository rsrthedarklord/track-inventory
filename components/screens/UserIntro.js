import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Platform,
} from "react-native";

import React, { Component } from 'react';

class UserIntro extends Component{
    constructor(props){
      super(props);
      this.state = {
        userName : ''
      }
    }

    onChangeTextUserName = ({userName}) => {
      userName = userName.replace(/^\s/, "").replace(/\s\s+/g, " ");
      this.setState({userName});
    }

    addUserNameInDB = () => {
      let userName = this.state.userName;
      userName = userName.trim();
      this.props.addUserName({userName});
      this.props.navigation.navigate('Inventories');
    }

    render(){
      const {navigation} = this.props;
      return (
        <View style={styles.container}>
          <Image
            style={styles.inventoryLogo}
            source={require('../../assets/inventory.png')}
          />
          <View style={styles.viewHolder}>
            <Text style={styles.greetingText}>Hi, {this.props.userName ? this.props.userName : "What's your name?"}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your name here"
                value={this.state.userName}
                placeholderTextColor="#D3D3D3"
                style={styles.nameInputBox}
                onChangeText={userName => this.onChangeTextUserName({ userName })}
              />
              <TouchableOpacity
                style={styles.navNext}
                onPress={this.addUserNameInDB}
                disabled={!this.state.userName || !this.state.userName.trim()}
              >
                <Text style={styles.navNextText}>
                  &#8594;
                </Text>
              </TouchableOpacity>
            </View>
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
    inventoryLogo: {
      width: 100,
      height: 100
    },
    inputContainer:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    greetingText: {
      fontSize: 20,
      color: '#ffffff'
    },
    nameInputBox:{
      color: "#ffffff",
      backgroundColor: '#7DB0FE',
      width: '70%',
      fontSize: 20,
      paddingLeft:5,
      marginRight: 20,
      height: 100
    },
    navNext: {
      height: 100,
      width: 50,
      backgroundColor: "#5C94E4",
    },
    navNextText: {
      fontSize: 50,
      lineHeight: 80,
      textAlign: 'center',
      color: "#ffffff"
    }
  }

  export default UserIntro;