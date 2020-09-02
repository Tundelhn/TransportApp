import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Styles from "../config/styles";

export default function MobileAuthScreen() {
  return (
    <View>
      <Text style={Styles.textstyle}>Enter Your Number</Text>
      <AppText>We will send a code to verify your number</AppText>
      <AppTextInput />
      <AppButton title="submit" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
