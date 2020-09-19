import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import Title from "../components/Title";
import StartTrip from "../components/StartTrip";
import StartTripp from "../components/StartTripp";
import StartTrippp from "../components/StartTrippp";
import AppButton from "../components/AppButton";

export default function ScheduledScreen() {
  return (
    <View style={styles.container}>
     <Heading />
     <Title />
     <StartTrip />
     <StartTripp />
     <StartTrippp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-end",
    //alignItems: "center",
  },
});
