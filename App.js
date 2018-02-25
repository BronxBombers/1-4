
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity } from 'react-native';

export default class ratingApp extends Component {



  render() {
    const buttons = [
      {text: 'button 1', pic: './assets/star.png', action: () => console.log('pressed button 1')},
      {text: 'button 2', pic: './assets/star.png', action: () => console.log('pressed button 2')},
      {text: 'button 3', pic: './assets/star.png', action: () => console.log('pressed button 3')},
      {text: 'button 4', pic: './assets/star.png', action: () => console.log('pressed button 4')},
      {text: 'button 5', pic: './assets/star.png', action: () => console.log('pressed button 5')}
    ];

    const renderedButtons =  buttons.map(b => {
      return <TouchableOpacity key={b.text} title={b.text} onPress={b.action}><Image source={require('./assets/star.png')} style={{height:60,width:60}}/></TouchableOpacity>;});

    return (
      <View style={{flex:1,flexDirection:"column",backgroundColor:"red",justifyContent:"flex-end"}}>
        <View style={{flex:0,flexDirection:"column", alignItems:"center",marginBottom:150,marginTop:100}}>
          <Text style={{fontSize:36,paddingBottom:50}}>Store Name Here</Text>
          <Image source={require("./assets/placeholder.jpg")} style={{height:250,width:250}}/>
        </View>
        <View style={{flex:0, flexDirection:"row", backgroundColor:"blue", marginBottom:75}}>
          {renderedButtons}
        </View>
      </View>
    );
  }
}
