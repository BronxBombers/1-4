
import React, { Component } from 'react';
import { AppRegistry, Image, Button, Text, Alert, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class ratingApp extends Component {
  render() {
    return (
      //Base Background
      <ImageBackground source={require("./assets/materialBack.jpg")} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Store Name Here</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <Image source={require("./assets/placeholder.jpg")} style={styles.previewImg}/>
        </View>
        <View style={styles.stars}>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={styles.starsDimensions}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={styles.starsDimensions}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={styles.starsDimensions}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={styles.starsDimensions}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            Alert.alert("hello");
            }
          }>
            <Image source={require("./assets/star.png")} style={styles.starsDimensions}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

    background: {
      flex:1,
      flexDirection:"column",
      backgroundColor:"blue",
      justifyContent:"space-between", 
    },

    header: {
      alignItems:"center",
      marginTop:75,
    },

    headerText: {
      fontSize:42,
      color:"#FFFFFF",
      textAlign:"center",
    },

    previewImg: {
      height:250,
      width:250,
      borderRadius:125,
      borderWidth:10,
      borderColor:"#DCDCDC",
    },

    stars: {
      flex:0, 
      flexDirection:"row",
      justifyContent:"space-between", 
      marginBottom:75, 
      marginLeft:15,
      marginRight:15,
    },

    starsDimensions: {
      height: 60,
      width:60,
    },
});