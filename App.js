/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
 
export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAJbNQsp4qeFQ95QsCbWVbIWMM6EJAWh_o",
      authDomain: "react-auth-f5553.firebaseapp.com",
      databaseURL: "https://react-auth-f5553.firebaseio.com",
      projectId: "react-auth-f5553",
      storageBucket: "react-auth-f5553.appspot.com",
      messagingSenderId: "993803492405"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText='Auth' />  
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
