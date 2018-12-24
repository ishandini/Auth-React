/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import { Header, LinkButton, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
 
export default class App extends Component {

  state = {logIn: null};

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({logIn: true});
      } else {
        this.setState({logIn: false});
      }
    });
  }

  renderContent() { 
    switch (this.state.logIn) {
      case true:
        return(
        <View style={styles.logOutStyle}>
           <LinkButton onPress={() => {firebase.auth().signOut()} }>Log Out</LinkButton>
        </View>
               )
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    } 
  }

  render() {
    return (
      <View>
        <Header headerText='Auth' />   
        { this.renderContent() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logOutStyle: {
    marginTop: 50,
    height: 44,
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  
});
