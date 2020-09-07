import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import AppButton from "../components/AppButton";
import Styles from "../config/styles";
export default function SignupScreen({ color = "primary" }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/drivers-bg.jpg")}
        style={Styles.image}
      >
        <View style={Styles.headerText}>
          <Text style={Styles.signupText}>Commute Easily</Text>
          <Text style={Styles.signupText}>with "our brand"</Text>
        </View>
        <View style={Styles.textCaption}>
          <Text style={Styles.textCaptionTwo}>
            Earn good money with your vehicle
          </Text>
          <Text style={Styles.textCaptionTwo}>
            offer ride to fello commuters and
          </Text>
        </View>
      </ImageBackground>
      <View style={Styles.footer}>
        <View style={Styles.footerContainer}>
          <Text style={Styles.footerContainerText}>Signup</Text>
        </View>
        <View style={Styles.footerContainerTextCaption}>
          <Text style={Styles.footerContainerSignupText}>
            Sign up as regular user
          </Text>
        </View>
        <View style={Styles.footerContainerButton}>
          <AppButton title="sign Up" color="button" />
        </View>
        <View style={Styles.footerContainerButtonText}>
          <Text style={Styles.footerunderText}>
            Regular users are able to book rides offer
          </Text>
          <Text style={Styles.footerunderText}>Interstate bookings</Text>
        </View>
        <View style={Styles.footerBottomContainer}>
          <Text style={Styles.footerBottonText1}>
            Do you own a car? sign up here to earn
          </Text>
          <Text style={Styles.footerBottomtext2}> wih our brand</Text>
        </View>
        <View style={Styles.driverSignupContainer}>
          <AppButton title="sign Up" color="button" />
        </View>
        <View style={Styles.driverContainerText}>
          <Text style={Styles.driversignupText}>
            You will be able to offer ride and earn cash
          </Text>
          <Text style={Styles.driversignupText}>
            when you offer ride to other commuters
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
