import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ApText from "./ApText";
import Styles from "../config/styles"
import colors from "./colors";

export default function Cards({ avatar, start, image,time, end, seat, onPress, cash, car }) {
  return (
    <View style={Styles.Contain}>
            <View style={Styles.detaill}>
                <ApText textStyle={{fontWeight:'bold'}}>{start}</ApText>
                <Text >{time}</Text>
                <ApText textStyle={{fontWeight:'bold'}}>{end}</ApText>
            </View>
            <View style={Styles.detaills}>
                <View style={Styles.imagee}>
                    <Image  source={image} style={{marginLeft:15}}/>
                    <ApText textStyle={{width:60,paddingLeft:5, }}>{car}</ApText>
                </View>   
                <View style={Styles.Image} >
                    <Image  source={avatar}  />
                    <Text style={Styles.Seat}>{seat}</Text>
                </View>
                    <Text style={{top:32, }}>{cash}</Text>  
            </View>
    </View>
  );
}

const styles = StyleSheet.create({})