import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//import AppButton from "./AppButton ";
import Styles from "../config/styles"
import colors from "./colors";

export default function Offer({ avater, car, num, sign, passenger, head, title, image, icon, time, local, onPress }) {
  return (
    <View style={Styles.containerx}>
        <View style={Styles.carrd}>
              <Text style={Styles.headx}>{local}</Text>
              <Text style={Styles.timex}>{time}</Text>
              <Text style={Styles.headx}>{head}</Text>
        </View>
        <View style={Styles.carrdd}>
            <Image source={image} style={Styles.imagex} />
            <View>
            <View style={{flexDirection:'row'}}>
                <Image source={avater} style={{top:3}}/>
                <Text style={{paddingLeft:5, paddingBottom:10}}>{car}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image source={icon} style={{top:2}} />
                <Text style={{paddingLeft:5, paddingBottom:10}}>{passenger}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image source={sign} style={{top:3}} />
                <Text style={{paddingLeft:9, paddingBottom:10}}>{num}</Text>
                </View>
            </View>
            <TouchableOpacity style={Styles.prex}  onPress={onPress}>
            <View>
              <Text style={{color:colors.white}}>{title}</Text>
              </View>
        </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  
})