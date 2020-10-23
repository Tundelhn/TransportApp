import React from "react";
import {  Text, View, TouchableOpacity } from "react-native";
import Styles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";

export default function Heading({icon, title, onPress}) {
  return (
    <View style={Styles.view}>
        <TouchableOpacity style={Styles.backward} onPress={onPress}>
        {icon && (<MaterialCommunityIcons name={icon} size={20}  color={colors.black}  />)}
        </TouchableOpacity>
        <Text style={Styles.Offer}>{title}</Text>
    </View>
  );
}

