import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "./colors";
import AppText from "./AppText";



export default function Card({ avatar, head, image, title, onPress }) {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
            <Image source={avatar} style={styles.avatar}/> 
            <View style={styles.detail}>
              <Text style={styles.head}>{head}</Text>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
            <Image source={image} style={styles.image} /> 
            </View>
      </View>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 12,
    height:70,
    borderWidth: 5,
    borderColor: colors.light_grey,
  },
  container:{
    backgroundColor: colors.white,  
  },
  detail:{
    paddingRight:110
  },
  head:{
    fontWeight: 'bold',
    fontSize:15
  },
  image:{
    paddingTop: 20
  }

})