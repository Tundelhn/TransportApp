import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import Styles from "../config/styles";

export default function InText() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.SectionStyle}>
        <Image source={require("../../assets/search.png")}  style={styles.ImageStyle} />
        <TextInput
                style={styles.text}
                placeholder="Enter Your Name Here"
                underlineColorAndroid="transparent"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.8,
    borderWidth: 0.3,
    borderBottomColor: '#CBCDD0',
    height: 50,
   // borderRadius: 5,
    margin: 10,
    paddingLeft: 5
  },

  ImageStyle: {
    padding: 14,
    margin: 5,
    height: 20,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  text:{
    flex: 1, 
    paddingLeft: 15,
    fontSize: 16
  }
});