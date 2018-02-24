import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity } from 'react-native';

export default class ratingApp extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"row", backgroundColor:"blue", alignItems:"flex-end", marginBottom:50}}>
        <TouchableOpacity
          onPress={() => {
          Alert.alert("hello");
          }
        }>
          <Image source={require("./assets/star.png")} style={{height:100,width:100}}/>
        </TouchableOpacity>
      </View>
    );
  }
}