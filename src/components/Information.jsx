import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ApText from "./ApText";
import Styles from "../config/styles"
import colors from "./colors";

export default function Inform({ride, local, time, name, image,onPress}) {
  return (
    <View style={Styles.info}>
            <View style={Styles.note}>
            <ApText textStyle={Styles.ride}>{ride}</ApText>
            <ApText textStyle={Styles.time}> {time}</ApText>
            </View>
           <ApText textStyle={Styles.ojoText}>{local}</ApText>
             {/* <View style={Styles.letter}>  */}
            <ApText textStyle={Styles.aka}>{name}</ApText>
           
            <TouchableOpacity onPress={onPress}>
                 <Image  source={image} style={Styles.wards} />
             </TouchableOpacity>
             {/* </View>  */}
    </View>
  );
}

const styles = StyleSheet.create({})