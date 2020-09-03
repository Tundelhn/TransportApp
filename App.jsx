import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import AppButton from "./src/components/AppButton";
import MobileAuthScreen from "./src/screens/MobileAuthScreen";
import AppTextInput from "./src/components/AppTextInput";
import SignupScreen from "./src/screens/SignupScreen";
import background from "./src/config/images";
export default function App({ color = "primary" }) {
  return (
    <View>
      <ImageBackground
        source={require("./assets/drivers-bg.jpg")}
        style={styles.image}
      >
        <View
          style={{
            position: "absolute",
            width: 335,
            height: 92,
            top: 92,
            left: 320,
          }}
        >
          <Text style={{ fontSize: 36, lineHeight: 42, color: "#fff" }}>
            Commute Easily
          </Text>
          <Text style={{ fontSize: 36, lineHeight: 42, color: "#fff" }}>
            with "our brand"
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 335,
            height: 40,
            left: 320,
            top: 197,
          }}
        >
          <Text style={{ fontSize: 16, lineHeight: 20, color: "#fff" }}>
            Earn good money with your vehicle
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 20, color: "#fff" }}>
            offer ride to fello commuters and
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <View
          style={{
            position: "absolute",
            width: 59,
            height: 23,
            left: 34,
            top: 25,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              color: "#000",
              fontWeight: "500",
            }}
          >
            Signup
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 184,
            height: 28,
            left: 34,
            top: 80,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 17,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Sign up as regular user
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: 10,
            width: "100%",
            top: 90,
            left: 15,
            right: 10,
          }}
        >
          <AppButton title="sign Up" color="button" />
        </View>
        <View
          style={{
            position: "absolute",
            width: 268,
            height: 38,
            left: 20,
            top: 155,
          }}
        >
          <Text style={{ lineHeight: 18, fontSize: 14 }}>
            Regular users are able to book rides offer
          </Text>
          <Text style={{ lineHeight: 18, fontSize: 14 }}>
            Interstate bookings
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: 268,
            height: 38,
            left: 20,
            top: 220,
          }}
        >
          <Text style={{ lineHeight: 18, fontSize: 14, fontWeight: "bold" }}>
            Do you own a car? sign up here to earn
          </Text>
          <Text style={{ lineHeight: 18, fontSize: 14 }}> wih our brand</Text>
        </View>
        <View
          style={{
            position: "absolute",
            marginTop: 10,
            width: "100%",
            top: 250,
            left: 15,
            right: 10,
          }}
        >
          <AppButton title="sign Up" color="button" />
        </View>
        <View
          style={{
            position: "absolute",
            width: 3008,
            height: 38,
            left: 20,
            top: 310,
          }}
        >
          <Text style={{ lineHeight: 18, fontSize: 14, color: "#828282" }}>
            You will be able to offer ride and earn cash
          </Text>
          <Text style={{ lineHeight: 18, fontSize: 14, color: "#828282" }}>
            when you offer ride to other commuters
          </Text>
        </View>
      </View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  image: {
    position: "absolute",
    width: 998,
    height: 700,
    left: -309,

    top: 10,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signin: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

{
  /* /</View>style={{
              position: "absolute",
              width: 335,
              height: 92,
              left: 29,
              top: 92,
            }} */
}
