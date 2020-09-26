import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import Styles from "../config/styles";
import colors from "./colors";
import ApText from "./ApText";

export default function Title() {
  return (
    <View style={Styles.title}>
        <ApText textStyle={{borderBottomColor:colors.blue, borderBottomWidth: 3, width:40, top:3, color:colors.blue }}>All</ApText>
        <ApText textStyle={{color:colors.gray}}>Scheduled</ApText>
        <ApText textStyle={{color:colors.gray}}>Completed</ApText>
    </View>
  );
}

const styles = StyleSheet.create({});
