import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import SizedInput from "../components/SizedInput";
export default function CodeConfirmationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.code}>Enter code</Text>
        <Text style={styles.textStyle}>An sms code was sent to</Text>
        <Text style={styles.mobile}>+91(205)-555-0100</Text>
        <Text style={styles.conStyle}>Is this your Mobile Number?</Text>
      </View>
      <View style={styles.SizedBox}>
        <SizedInput />
        <SizedInput />
        <SizedInput />
        <SizedInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  SizedBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 15,
  },
  code: {
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    top: 35,
    left: 20,
  },
  textStyle: {
    fontSize: 14,
    position: "absolute",
    top: 65,
    left: 20,
  },
  mobile: {
    fontWeight: "bold",
    fontSize: 20,
    top: 85,
    left: 20,
  },
  conStyle: {
    top: 95,
    left: 20,
    marginBottom: 10,
  },
});
