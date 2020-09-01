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
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
  textInput: {
    borderRadius: 5,
    width: "90%",
    borderWidth: 0.5,
    padding: 15,
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;