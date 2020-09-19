import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import Styles from "../config/styles";

export default function Heading({image, title}) {
  return (
    <View style={Styles.view}>
        <TouchableOpacity style={Styles.backward}>
        <Image source={require("../../assets/Menu.png")} />
        </TouchableOpacity>
        <Text style={Styles.Offer}>Scheduled</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
 
});
