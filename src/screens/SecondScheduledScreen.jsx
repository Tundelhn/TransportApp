import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import Title2 from "../components/Title2";
import StartTrip from "../components/StartTrip";
import StartTripp from "../components/StartTripp";
import colors from "../components/colors";

export default function SecondScheduledScreen() {
  return (
    <View style={styles.container}>
    <Heading  image={require("../../assets/Menu.png")}  title='Schedule' />
     <Title2 />
     <StartTrip />
     <StartTripp />
     <View style={{backgroundColor:colors.ash, height:240, top: 20}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor:colors.gray
  
  },
});
