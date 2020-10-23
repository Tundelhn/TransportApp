import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../components/colors";

export default function SupportScreen ({ navigation }) {
  return (
    <View style={styles.container}>
<Text style={{color: colors.danger}}>This is Support screen</Text>
      <Button
        title='Go To Explore screen'
        onPress={() => navigation.navigate("Scheduled")}
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

