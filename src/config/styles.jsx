import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions
} from "react-native";
import Constants from "expo-constants"

const {
  height
} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.os === "android" ? "Roboto" : "Avenir",
  },
  textInput: {
    borderRadius: 5,
    width: "90%",
    borderWidth: 0.5,
    padding: 15,
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
  },

  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 530,
    left: 0,
    top: 282,
    width: 375,

    // paddingVertical: 50,
    // paddingHorizontal: 30,
  },
  image: {
    position: "absolute",
    width: 998,
    height: 700,
    left: -309,
    top: 10,
  },
  headerText: {
    position: "absolute",
    width: 335,
    height: 92,
    top: 92,
    left: 320,
  },
  signupText: {
    fontSize: 36,
    lineHeight: 42,
    color: "#fff"
  },
  textCaption: {
    position: "absolute",
    width: 335,
    height: 40,
    left: 320,
    top: 197,
  },
  textCaptionTwo: {
    fontSize: 16,
    lineHeight: 20,
    color: "#fff"
  },
  footerContainer: {
    position: "absolute",
    width: 59,
    height: 23,
    left: 34,
    top: 25,
  },
  footerContainerText: {
    fontSize: 18,
    lineHeight: 21,
    color: "#000",
    fontWeight: "500",
  },
  footerContainerTextCaption: {
    position: "absolute",
    width: 184,
    height: 28,
    left: 34,
    top: 80,
  },
  footerContainerSignupText: {
    fontSize: 16,
    lineHeight: 17,
    color: "#000",
    fontWeight: "bold",
  },
  footerContainerButton: {
    position: "absolute",
    marginTop: 10,
    width: "100%",
    top: 90,
    left: 15,
    right: 10,
  },
  footerContainerButtonText: {
    position: "absolute",
    width: 268,
    height: 38,
    left: 20,
    top: 155,
  },
  footerunderText: {

    lineHeight: 18,
    fontSize: 14

  },
  footerBottomContainer: {
    position: "absolute",
    width: 268,
    height: 38,
    left: 20,
    top: 220,
  },
  footerBottonText1: {
    lineHeight: 18,
    fontSize: 14,
    fontWeight: "bold"
  },
  footerBottomtext2: {
    lineHeight: 18,
    fontSize: 14
  },
  driverSignupContainer: {
    position: "absolute",
    marginTop: 10,
    width: "100%",
    top: 250,
    left: 15,
    right: 10,
  },
  driverContainerText: {
    position: "absolute",
    width: 3008,
    height: 38,
    left: 20,
    top: 310,
  },
  driversignupText: {
    lineHeight: 18,
    fontSize: 14,
    color: "#828282"
  }
});

export default styles;