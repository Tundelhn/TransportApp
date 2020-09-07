import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import colors from "../components/colors";
import theme from "../config/theme";
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
    marginTop: 10,
    height: 5,
    borderRadius: 5,
    left: 9,
    
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
    Icon3: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent:'center',
    marginTop: 10,
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
      paddingTop: 3,
      color: colors.gray,
      fontSize: 15
    },
    search:{
      paddingLeft: 50
    },
    seperator:{
      borderBottomWidth: 3,
      paddingBottom:70,
      borderColor: theme.light_grey
      
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
    paddingTop: 20,
    paddingLeft: 15 
   },
   cardd:{
    backgroundColor: colors.white,
    flexDirection: 'column',
    height:90,
    width:320,
    marginLeft:20,
    borderRadius:10,
    borderWidth: 5,
    borderColor: colors.light_grey,
  },
  containerr:{
    backgroundColor: colors.light_grey,  
  },
  detaill:{
    marginLeft:10,
    paddingRight:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detaills:{
    paddingRight:40,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagee:{
    paddingTop: 20,
    flexDirection:'row'
  },
  image:{
    paddingTop: 6,
    paddingRight:10,
    flexDirection:'column'
  },
  images:{
    paddingTop: 40,
    paddingRight:1,
    flexDirection:'column'
  }

});

export default styles;
