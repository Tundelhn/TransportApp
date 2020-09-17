import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../config/theme";
import colors from "./colors";


export default function AppButton({ title, onPress, color = "primary", buttonStyle, textStyle }) {
  return (
    <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color], ...buttonStyle }]}
      onPress={onPress}
    >
    <Text style={{...styles.text, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    top: 50,
    left: "5%",
    right: "5%",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color:theme.white,
    fontSize: 18,
    textTransform: "capitalize",
  },
});

