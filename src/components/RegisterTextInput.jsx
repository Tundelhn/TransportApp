import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputComponent from "../components/AppTextInput";
export default function RegisterTextInput() {
  return (
    <View>
      <InputComponent placeholder="Enter first name" />
      <InputComponent placeholder="Enter Last Name" />
      <InputComponent placeholder="Enter Email Address" />
      <InputComponent placeholder="Enter Phone Number" />
      <InputComponent placeholder="Enter City" />
    </View>
  );
}

const styles = StyleSheet.create({});
