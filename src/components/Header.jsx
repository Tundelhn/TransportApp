import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> {children} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginLeft: 13,
    marginBottom: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
