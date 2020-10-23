import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default function Screens({ Children }) {
  return <SafeAreaView style={styles.Screens}>{Children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  Screens: {
    padding: Constants.statusBarHeight,
  },
});
