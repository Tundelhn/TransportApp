import React from "react";
import { Text, View } from "react-native";
import Styles from "../../config/styles";

export default function AppText({ children }) {
  return (
    <View>
      <Text style={Styles.text4}>{children}</Text>
    </View>
  );
}
