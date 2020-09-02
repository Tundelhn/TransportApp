import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Styles from "../config/styles";

export default function AppTextInpout({ ...otherProps }) {
  return (
    <View>
      <TextInput
        style={Styles.textInput}
        {...otherProps}
        keyboardType="numeric"
      />
    </View>
  );
}
