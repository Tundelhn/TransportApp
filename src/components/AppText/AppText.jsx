import React from "react";
import { Text, View } from "react-native";
import Styles from "../../config/styles";

export default function AppText({ children, style }) {
  return (
    <View>
      <Text style={[Styles.text, style]}>{children}</Text>
    </View>
  );
}
