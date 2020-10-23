import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import Styles from "../config/styles";
import theme from "../config/theme";


export default function InText({placeholder, image, size, textStyle, boxStyle}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{...styles.SectionStyle, ...boxStyle}}>
        <Image source={image}  style={styles.ImageStyle} />
        <TextInput
                style={{...styles.text, ...textStyle}}
                placeholder={placeholder}
                size={size}
                //underlineColorAndroid="transparent"
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
    backgroundColor: theme.light_grey,
    //borderBottomWidth: 0.8,
    //borderWidth: 0.3,
    //borderBottomColor: '#CBCDD0',
    height: 50,
    borderRadius: 10,
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
    paddingLeft: 1,
    fontSize: 16

  }
});