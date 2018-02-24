
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity } from 'react-native';

export default class ratingApp extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:"column",backgroundColor:"red",justifyContent:"flex-end"}}>
        <View style={{flex:0,flexDirection:"column", alignItems:"center",marginBottom:150,marginTop:100}}>
          <Text style={{fontSize:36,paddingBottom:50}}>Store Name Here</Text>
          <Image source={require("./assets/placeholder.jpg")} style={{height:250,width:250}}/>
        </View>
        <View style={{flex:0, flexDirection:"row", backgroundColor:"blue", marginBottom:75}}>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:75,width:75}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:75,width:75}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:75,width:75}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:75,width:75}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:75,width:75}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}