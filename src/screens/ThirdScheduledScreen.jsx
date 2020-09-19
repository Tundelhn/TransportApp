import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import Title3 from "../components/Title3";
import StartTrippp from "../components/StartTrippp";
import colors from "../components/colors";
export default function ThirdScheduledScreen() {
  return (
    <View style={styles.container}>
     <Heading />
     <Title3 />
     <StartTrippp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor:colors.gray

  },
});
