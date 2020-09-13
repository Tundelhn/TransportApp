import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "./colors";
import AppText from "./AppText";
import Styles from "../config/styles"

export default function Card({ avatar, head, image, title, onPress }) {
  return (
    <View style={Styles.containe}>
      
        <TouchableOpacity onPress={onPress}>
        <View style={Styles.cardx}>
            <Image source={avatar} style={Styles.avatar}/> 
            <View style={Styles.detailx}>
              <Text style={Styles.headx}>{head}</Text>
              <Text style={Styles.titlex}>{title}</Text>
            </View>
            <View>
            <Image source={image} style={Styles.imagex} /> 
            </View>
      </View>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
})