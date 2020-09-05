import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../config/theme";

export default function AppButton({ title, onPress, color = "secondary" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: theme[color],
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: theme.secondary,
    borderRadius: 5,
    padding: 10,
    top: 560,
    justifyContent: "center",
    left: 15,
    right: 10,
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
  },
  text: {
    color: theme.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
