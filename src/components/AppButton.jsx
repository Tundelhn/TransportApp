import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../config/theme";

export default function AppButton({ title, onPress, color = "secondary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.secondary,
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "93%",
    marginVertical: 10,
  },
  text: {
    color: theme.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
