import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputComponent from "./src/components/Textinput";
import AppButton from "./src/components/AppButton";
import Mobile from "./src/screens/MobileAuthScreen";
import SignupScreen from "./src/screens/SignupScreen";

export default function App() {
  return <SignupScreen />;
}

const styles = StyleSheet.create({});

// <View>
{
  /* <InputComponent placeholder="Enter First name" />
      <InputComponent placeholder=" Enter your Lastname" />
      <InputComponent placeholder="Enter your Email Address" />
      <InputComponent placeholder="Mpbile Phone Number" />
      <InputComponent placeholder="Which city do you reskide? " />
      <View style={{ top: 80, left: 16, right: 16 }}>
        <AppButton title="submit" color="button" />
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text>Already Have an Account ?</Text>
        </View>
      </View> */
}

// </View>
