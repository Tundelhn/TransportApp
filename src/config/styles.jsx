import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform
} from "react-native";
import Constants from "expo-constants"

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    position: "absolute",
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
    top: 121
  },
  textInput: {
    position: "absolute",
    borderRadius: 5,
    width: 319,
    top: 14,
    height: 50,
    borderWidth: 0.5,
    padding: 15,
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
  },
  textstyle: {
    top: 100,
    left: 5,
    position: "absolute",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default styles;