import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import colors from "../components/colors";
import Constants from "expo-constants"

const styles = StyleSheet.create({
  address:{
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 25,
    color: colors.gray,
    fontSize: 15
  },
  booking:{
    flexDirection: 'row',
    justifyContent: "center",
    alignContent:'center',
    marginTop: 190,
  },
  bus:{
    fontWeight:'400', 
    fontSize: 16,
    paddingLeft:5
  },
  customBtn: {
    fontSize: 20,
    fontWeight: '400',
    width: 145,
    height:45,
    color: "black",
    marginLeft:25,
    borderRadius: 20,
   
},
  customBtn1: {
    marginLeft:25,
    width: 145,
    height:45,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor:colors.white, 
    borderWidth: 1,
    borderColor: colors.sky,
},
customText:{
  fontWeight:'bold',
  fontSize: 18,
  color:colors.sky, 
  marginVertical: 10,
  marginHorizontal: 30,
  alignItems: "center",
},
  text: {
    fontSize: 18,
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
    Icon: {
    flexDirection: 'column',
    justifyContent: "center",
    marginTop: 13,
    height: 5,
    borderRadius: 5
    },
    Icon1: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 13,
    height: 5,
    borderRadius: 5,
    left: 9
    },
    Icon2: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent:'center',
    marginTop: -25,
    height: 5,
    borderRadius: 5,
    left: 10
    },
    Img: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: "space-around",
    },
    home:{
      flexDirection: 'row',
      padding: 10
    },
    homes:{
      paddingLeft: 20,
      paddingTop: 5,
      color: colors.gray,
      fontSize: 15
    },
    search:{
      paddingLeft: 50
    },
    test:{
      fontSize: 14,
      color: colors.gray
    },
    tests:{
      fontSize: 19,
      fontWeight: "bold"
    },
    texts:{
      fontSize: 23,
      fontWeight: "bold"
    },
    word:{
      fontSize: 19,
      fontWeight: "bold",
      paddingLeft: 25,
    },
   work:{
    paddingTop: 60,
    paddingLeft: 15 
   }
});

export default styles;
