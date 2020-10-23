import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ApText from "./ApText";
import Styles from "../config/styles"
import colors from "./colors";

export default function Inform() {
  return (
    <View style={Styles.info}>
            <View style={Styles.note}>
            <ApText textStyle={Styles.ride}>Ride Request</ApText>
            <ApText textStyle={Styles.time}> 5min ago</ApText>
            </View>
            <ApText textStyle={Styles.ojoText}>Ojota to Ikoyi offer</ApText>
            <View style={Styles.imageView}>
              <Image  source={require("../../assets/fine.png")}  />
              <View>
                <ApText textStyle={Styles.name}>Name:</ApText>
                <ApText textStyle={Styles.from}>From:</ApText>
             </View>   
             <View >
             <ApText textStyle={Styles.request}>Ride Request</ApText>
             <ApText textStyle={Styles.font}>Ikeja,Lagos</ApText>
             </View>
             <View style={Styles.place}>
             <ApText textStyle={{color:colors.gray}}>To:</ApText>
             <ApText textStyle={{color:colors.gray}}>CMS</ApText>
             </View>
             <Image  source={require("../../assets/ward.png")} style={Styles.ward} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({})