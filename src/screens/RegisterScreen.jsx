import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <AppText>Enter Your Details</AppText>
      <AppText>This info will display to drivers offering the ride</AppText>
      <Text>this is the register screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
