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
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MapScreen from "./src/screens/MapScreen";
import DestinationScreen from "./src/screens/DestinationScreen";
import DestinationPartScreen from "./src/screens/DestinationPartScreen";
import OfferTripScreen from "./src/screens/OfferTripScreen";
//import {H} from "./src/screens/HomeScreen";

export default function App() {
  return <OfferTripScreen /> ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});