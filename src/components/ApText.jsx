import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ApText({ text, textStyle, children, textContainer }) {
  return (
    <View style={{ ...textContainer }}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
export default ApText;
