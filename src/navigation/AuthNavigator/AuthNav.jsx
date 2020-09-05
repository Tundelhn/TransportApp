import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import CodeConfirmationScreen from "../../screens/CodeConfirmationScreen";
import MobileAuthScreen from "../../screens/MobileAuthScreen";

const stack = createStackNavigator();
const AuthStack = ({ navigation }) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="mobileAuth"
        component={MobileAuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen name="code" component={CodeConfirmationScreen} />
    </stack.Navigator>
  );
};
export default function AuthNav() {
  return <AuthStack />;
}
