import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

export default function MobileAuthScreen() {
  return (
    <View style={styles.container}>
      <AppButton title="submit" color="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
