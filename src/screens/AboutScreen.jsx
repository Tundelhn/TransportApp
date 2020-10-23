import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../components/colors";

export default function AboutScreen ({ navigation }) {
  return (
    <View style={styles.container}>
<Text style={{color: colors.danger}}>This is About screen</Text>
      <Button
        title='Go To Explore screen'
        onPress={() => navigation.navigate("History")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

