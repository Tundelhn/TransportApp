import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import AppButton from "../components/AppButton";
import Header from "../components/Header";
import AppText from "../components/AppText";
import RegisterTextInput from "../components/RegisterTextInput";

export default function RegisterScreen() {
  return (
    <View>
      <Header>Enter your Details</Header>
      <AppText style={{ marginLeft: 14 }}>
        This info will be displayed to drivers offerring ride
      </AppText>
      <RegisterTextInput />
      <View style={{ top: 50, left: 16, right: 16 }}>
        <AppButton title="Continue" color="button" />
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Text>Already Have an Account ?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#0A84FF" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

//  {/* <AppText>Enter Your Details</AppText>
//     <AppText>This info will display to drivers offering the ride</AppText>
//     <Text>this is the register screen</Text> */}
//     <InputComponent placeholder="Enter First name" />
//     <InputComponent placeholder=" Enter your Lastname" />
//     <InputComponent placeholder="Enter your Email Address" />
//     <InputComponent placeholder="Mpbile Phone Number" />
//     <InputComponent placeholder="Which city do you reskide? " />
//
