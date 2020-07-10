/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Header from './components/header'; 

export default function App(){
  return (
    <View style={styles.screen}>
    
      <Header title="guess a number "/>
    </View>
  );
}
const styles =StyleSheet.create({
  screen:{
    flex: 1
  }

});


//