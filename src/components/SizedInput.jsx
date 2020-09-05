import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";

export default function SizedInput() {
  return (
    <View style={styles.input}>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.3,
    padding: 15,
    width: 50,
    marginTop: 90,
    borderRadius: 5,
  },
});
