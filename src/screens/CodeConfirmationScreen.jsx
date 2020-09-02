import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";

export default function CodeConfirmationScreen() {
  const [codeOne, setCodeOne] = useState("");
  const [codeTwo, setCodeTwo] = useState("");
  const [codeThree, setCodeThree] = useState("");
  return (
    <View>
      <Text>this is the place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
