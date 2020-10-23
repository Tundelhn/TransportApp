import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import colors from "../components/colors";
import theme from "./theme";
import { wp, hp } from "./Responsive";
//import Constants from "expo-constants"

const styles = StyleSheet.create({
  address: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 25,
    color: colors.gray,
    fontSize: 15
  },
  aka:{
    color:colors.gray,
    height:hp(60),
    alignSelf:"flex-start",
    width:wp(294),
    left:wp(14)
  },
  backward: {
    paddingLeft: 20,
    paddingTop: 4
  },
  booking: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: 'center',
    marginTop: 190,
  },
  bus: {
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 5
  },
  but:{
    flexDirection:'row',
    
    marginLeft:90,
    //bottom:20,
    //paddingTop:10
  },
  c: {
    top: 50,
    right: 140,
    justifyContent: 'center'
  },
  calender:{
    top:10, 
    right:10, 
    borderWidth: 1,height:50, 
    borderStartColor:colors.black, 
    borderColor:colors.light_grey, 
    padding:2,
    backgroundColor:colors.light_grey
   },
  cardx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 12,
    height: 70,
    borderWidth: 5,
    borderColor: colors.light_grey,
  },
  carrd: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: 80,
    paddingVertical: 12,
    //height:70,
  },
  carrdd: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: 25,
    paddingVertical: 12,
    //height:70,
  },
  cardd: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: 90,
    width: 320,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: colors.light_grey,
  },
  centeredView: {
    flex: 1,
    shadowColor: colors.primary
  },
  con:{
    flexDirection:'row', 
    alignSelf: 'center', 
  paddingTop:15,
  width: 250,
  marginRight:30
},
Con:{
  flexDirection:'row', 
alignSelf: 'center', 
width: 250,
marginRight:40
},
  containerr: {
    backgroundColor: colors.light_grey,
  },
  Containerr: {
 top:25,
  alignSelf:'center',
  borderBottomWidth:6,
  borderBottomColor:colors.ash,
  height:160,
  width:320,
  backgroundColor:colors.white

  },
  Contain: {
 marginTop:25,
  alignSelf:'center',
  borderWidth:3,
  borderColor:colors.ash,
  borderRadius: 10,
  //height:90,
  width:340,
  },
  containe: {
    backgroundColor: colors.white,
  },
  customBtn: {
    fontSize: 20,
    fontWeight: '400',
    width: 145,
    height: 45,
    color: "black",
    marginLeft: 25,
    borderRadius: 20,
  },
  customBtn1: {
    marginLeft: 25,
    width: 145,
    height: 45,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.sky,
  },
  customText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.sky,
    marginVertical: 10,
    marginHorizontal: 30,
    alignItems: "center",
  },
  detaill: {
    marginLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detaills: {
    paddingRight: 40,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:colors.light_grey
  },
  detailx: {
    paddingRight: 110
  },
  headx: {
    fontWeight: 'bold',
    fontSize: 15
  },
  flexDirection: {
    flexDirection: 'column',
    right: 1,
    bottom: 30
  },
  font:{
    color:colors.gray,
    left:wp(8),
    paddingTop:hp(5)
  },
  from:{
  fontWeight:'600', 
  paddingTop:hp(5),
  paddingLeft:wp(13)
},
  home: {
    flexDirection: 'row',
    padding: 10
  },
  homes: {
    paddingLeft: 20,
    paddingTop: 3,
    color: colors.gray,
    fontSize: 15
  },
  Icon: {
    flexDirection: 'column',
    justifyContent: "center",
    marginTop: 13,
    height: 5,
    borderRadius: 5
  },
  icon: {
    marginTop: 13,
    marginLeft:30
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
    alignContent: 'center',
    marginTop: -25,
    height: 5,
    borderRadius: 5,
    left: 10
  },
  Icon4: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: 'center',
    height: 5,
    borderRadius: 5,
    left: 5
  },
  Icon3: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: 'center',
    marginTop: 10,
    height: 5,
    borderRadius: 5,
    left: 10
  },
  imagee: {
    paddingTop: 20,
    flexDirection: 'row'
  },
  image: {
    paddingTop: 6,
    paddingRight: 10,
    flexDirection: 'column'
  },
  images: {
    paddingTop: 40,
    paddingRight: 1,
    flexDirection: 'column'
  },
  imagex: {
    paddingTop: 20,
  },
  imageView:{
  flexDirection:'row', 
  //justifyContent:'space-between', 
  paddingTop:12,
  paddingLeft:wp(16)
},
  Img: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  Imgg: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  info:{
    borderWidth:3,
    borderColor:colors.ash,
    height:121
  },
  letter:{
    //flexDirection:'row',
   paddingTop:hp(8),
   alignSelf:"flex-start",

   paddingLeft:wp(16),
  // justifyContent:'space-around'
  },
  lineJoin:{
    paddingLeft: 49, 
    paddingTop:5
  },
  M: {
    width: 300,
    height: 40, borderRadius: 2,
    backgroundColor: colors.light_grey
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    top: 107,
    padding: 20,
    height: 420,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 20
  },
  name:{
  fontWeight:'600', 
  height:hp(20),
  paddingLeft:wp(13)
},
  Note:{
    flex:1,
  },
  Notes:{
    marginTop:hp(16)
  },
  note:{
  flexDirection:'row', 
  justifyContent:'space-between', 
  borderBottomWidth:1, 
  borderBottomColor:colors.ash, 
  height:hp(30),
},
  Offer: { 
    left: 45, 
    fontWeight: 'bold',
    top:hp(4)
  },
  ojoText:{
    alignSelf:'flex-start', 
    fontWeight:'bold' ,
    left:wp(16),
    paddingTop:hp(12)
    },
  prex: {
    backgroundColor: colors.blue,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    top: 20
  },
  prexx: {
    backgroundColor: colors.blue,
    width: 340,
    height: 40,
    marginTop: 180,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    top: 20
  },
  place:{
  flexDirection:'row', 
  top:24,
  left:wp(34),
  color:colors.gray
},
  req:{
    marginTop:10,
    borderWidth:3,
    borderColor:colors.ash,
    borderRadius: 10,
    width:340,
    alignSelf:'center',
  },
  request:{
    color:colors.gray,
    left:wp(8),
    fontSize:13
  },
  ri:{
    flex:1, 
    backgroundColor:colors.light_grey, 
    justifyContent:'center', 
    alignItems:'center' 
  },
  ride:{
    color:colors.gray, 
    left:wp(16), 
    paddingTop:wp(5),
    height:hp(78),
    fontSize: 14
  },
  search: {
    paddingLeft: 50
  },
  Seat:{paddingRight:50, color:colors.gray},
  seperator: {
    borderBottomWidth: 3,
    paddingBottom: 70,
    borderColor: theme.light_grey,
    right: 7
  },
  seperator1: { 
    paddingBottom: 70,
    right: 7
  },
  sy: {
    width: 135, borderWidth: 1,
    borderColor: colors.blue,
    height: 45,
    borderRadius: 2,
    backgroundColor: colors.light_grey
  },
  test: {
    fontSize: 14,
    color: colors.gray
  },
  testx: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 50,
    paddingLeft: 17
  },
  tests: {
    fontSize: 19,
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
  texts: {
    fontSize: 23,
    fontWeight: "bold"
  },
  time:{
    right:wp(16), 
    color:colors.lightGray,  
    paddingTop:wp(5),
    height:hp(78),
    fontSize: 14
  },
  title:{
    flexDirection:'row',
    justifyContent:'space-around',
    top: 20,
    borderBottomWidth:2,
    color:colors.light_grey,
    borderBottomColor:colors.light_grey,
    fontWeight:'bold' 
  },
  Touch:{ 
    flexDirection: 'column', 
    left: 116, 
    alignContent: 'center', 
  },
  Trip: { bottom: 50, fontWeight: 'bold', fontSize: 18 },
  up:{
    flexDirection:'row',
     justifyContent:'space-around',
     paddingTop:10,
    },
  wit: { 
    flexDirection: 'row',
   top: 20, width: "100%", 
   justifyContent: "space-between",
   borderRadius: 3 
  },
  Wit: { 
    flexDirection: 'row',
    width: "100%", 
   justifyContent: "space-around",
   borderRadius: 3,
   bottom:10
  },
  ward:{
    left:wp(67),
  },
  wards:{
    left:wp(328),
    bottom:hp(63)
  },
  word: {
    fontSize: 19,
    fontWeight: "bold",
    paddingLeft: 25,
  },
  work: {
    paddingTop: 20,
    paddingLeft: 15
  },
  V: { flexDirection: 'column', right: 1, bottom: 30, },
  view: {
    marginTop: hp(58),
    flexDirection: 'row',
    left:wp(16)
  }
});

export default styles;
