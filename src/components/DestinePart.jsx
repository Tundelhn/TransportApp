import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "./colors";
import AppText from "./AppText";
import Styles from "../config/styles"



export default function DestinePart({begin, onPress, time, destin, image, motor, arrow, seat, not, naira}) {
  return (
    <View style={Styles.containerr}>
        <TouchableOpacity style={Styles.cardd} onPress={onPress}>
            <View style={Styles.detaill}>
                <Text style={Styles.begins}>{begin}</Text>
                <Text style={Styles.tim}>{time}</Text>
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

const styles = StyleSheet.create({
  // cardd:{
  //   backgroundColor: colors.white,
  //   flexDirection: 'column',
  //   height:90,
  //   width:320,
  //   marginLeft:20,
  //   borderRadius:10,
  //   borderWidth: 5,
  //   borderColor: colors.light_grey,
  // },
  // containerr:{
  //   backgroundColor: colors.light_grey,  
  // },
  // detaill:{
  //   marginLeft:10,
  //   paddingRight:20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // detaills:{
  //   paddingRight:40,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // imagee:{
  //   paddingTop: 20,
  //   flexDirection:'row'
  // },
  // image:{
  //   paddingTop: 10,
  //   paddingRight:20,
  //   flexDirection:'column'
  // },
  // images:{
  //   paddingTop: 40,
  //   paddingRight:1,
  //   flexDirection:'column'
  // }

})