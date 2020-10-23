import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import Styles from "../config/styles";
import colors from "./colors";
import ApText from "./ApText";

export default function Title3() {
  return (
    <View style={Styles.title}>
    <ApText textStyle={{color:colors.gray}}>All</ApText>
    <ApText textStyle={{color:colors.gray}}>Scheduled</ApText>
    <ApText textStyle={{borderBottomColor:colors.blue, borderBottomWidth: 3, width:90, top:3, color:colors.blue }}>Completed</ApText>
    </View>
  );
}

const styles = StyleSheet.create({});
