import {
  StatusBar
} from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import AppButton from "./src/components/AppButton";
import MobileAuthScreen from "./src/screens/MobileAuthScreen";
export default function App() {
  return <MobileAuthScreen / > ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});