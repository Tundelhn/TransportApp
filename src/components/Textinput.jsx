import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../config/theme";
import AppText from "../components/AppText";
import Screen from "../components/Screens";

export default function Textinput({ ...otherProps }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    width: "90%",
    left: 10,
    marginVertical: 5,
  },
});
