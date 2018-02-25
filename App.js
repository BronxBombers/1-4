
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity } from 'react-native';

export default class ratingApp extends Component {
  render() {
    return (
      
      <View style={{flex:1,flexDirection:"column",backgroundColor:"blue",justifyContent:"space-between"}}>
        <View style={{flex:0, alignItems:"center",marginTop:75}}>
          <Text style={{fontSize:40,color:"#FFFFFF"}}>Store Name Here</Text>
        </View>
        <View style={{flex:0, alignItems:"center"}}>
          <Image source={require("./assets/placeholder.jpg")} style={{height:250,width:250,borderRadius:125,borderWidth:10,borderColor:"#FFFFFF"}}/>
        </View>
        <View style={{flex:0, flexDirection:"row",justifyContent:"space-between", marginBottom:75}}>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:60,width:60}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:60,width:60}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:60,width:60}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:60,width:60}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={{height:60,width:60}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}