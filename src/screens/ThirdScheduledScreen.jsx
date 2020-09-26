import React from "react";
import { View, Text, StyleSheet, image } from "react-native";
import Heading from "../components/Heading";
import Title3 from "../components/Title3";
import StartTrippp from "../components/StartTrippp";
import colors from "../components/colors";
export default function ThirdScheduledScreen() {
  return (
    <View style={styles.container}>
     <Heading  image={require("../../assets/Menu.png")}  title='Schedule' />
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
