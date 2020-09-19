import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Styles from "../config/styles"

export default function DestinePart({begin, onPress, time, destin, image, motor, arrow, seat, not, naira}) {
  return (
    <View style={Styles.containerr}>
        <TouchableOpacity style={Styles.cardd} onPress={onPress}>
            <View style={Styles.detaill}>
                <Text style={Styles.begin}>{begin}</Text>
                <Text style={Styles.time}>{time}</Text>
                <Text style={Styles.destin}>{destin}</Text>
            </View>
            <View style={Styles.detaills}>
             <View style={Styles.imagee}>
             <Image source={image}  style={{marginLeft:10}}/>
             <Text style={{width:70,paddingLeft:5}}>{motor}</Text>
            </View>   
             <View style={Styles.image}>
             <Image source={arrow}  />
             <Text style={{paddingRight:50}}>{seat}</Text>
            </View>   
             <View style={Styles.images}>
             <Image source={not}  />
             <Text >{naira}</Text>
            </View>   
            </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})