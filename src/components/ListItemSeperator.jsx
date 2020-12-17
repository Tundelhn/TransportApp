import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./colors";

export default function ListItemSeperator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 7,
    backgroundColor: colors.light_grey,
  },
});
