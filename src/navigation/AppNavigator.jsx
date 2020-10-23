import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DestinationPartScreen from "../screens/DestinationPartScreen";
import DestinationScreen from "../screens/DestinationScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ScheduleTripScreen from "../screens/ScheduleTripScreen";
import ScheduledScreen from "../screens/ScheduledScreen";
import SecondScheduledScreen from "../screens/SecondScheduledScreen";
import ThirdScheduledScreen from "../screens/ThirdScheduledScreen";
import WalletScreen from "../screens/WalletScreen";
import HistoryScreen from "../screens/HistoryScreen";
import RefferalScreen from "../screens/RefferalScreen";
import SaveTripScreen from "../screens/SaveTripScreen";
import BookingScreen from "../screens/BookingScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingScreen from "../screens/SettingScreen";
import SupportScreen from "../screens/SupportScreen";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../components/colors";
import { MaterialCommunityIcons,  Ionicons, MaterialIcons } from "@expo/vector-icons";
import DrawerContent from "../components/DrawerContent";

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//creation of the stack screen
const WelcomeNavigator = ({ navigation }) => {
  return (
    <stack.Navigator mode='modal' options={{ headerShown: false }}>
      <stack.Screen
        component={DestinationScreen}
        name='Home'
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name='ios-menu'
              size={25}
              color='#000'
              backgroundColor='#f4f4f4'
              onPress={() => navigation.toggleDrawer()}
            ></Ionicons.Button>
          ),
        }}
      /> 
      <stack.Screen
        component={DestinationPartScreen}
        name='Destination'
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};
const ScheduledNavigator = () => {
  return (
    <stack.Navigator mode='modal'>
      <stack.Screen
        component={ScheduleTripScreen}
        name='Scheduled_Trip'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={ScheduledScreen}
        name='Scheduled'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={SecondScheduledScreen}
        name='secondScheduled'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={ThirdScheduledScreen}
        name='thirdScheduled'
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};
const DrawNavigator = () => {
  return (
    <stack.Navigator mode='modal'>
      <stack.Screen
        component={BookingScreen}
        name='Booking'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={HistoryScreen}
        name='history'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={SaveTripScreen}
        name='Save'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={RefferalScreen}
        name='Refferal'
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};
const InfoNavigator = () => {
  return (
    <stack.Navigator mode='modal'>
      <stack.Screen
        component={AboutScreen}
        name='About'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={SupportScreen}
        name='Support'
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={SettingScreen}
        name='Setting'
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};
const HomeNavigator = () => {
  return (
    <Tab.Navigator mode='modal'   
      tabBarOptions={{
          activeTintColor: colors.danger,
          inactiveTintColor: colors.newGray
        }}>
      <Tab.Screen
        component={WelcomeNavigator}
        name='Home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color}  size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={NotificationScreen}
        name='Notification'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='notifications-none' color={color}  size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={ScheduledNavigator }
        name='Scheduled_Trip'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='road-variant' color={color}  size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={WalletScreen}
        name='wallet'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='wallet-outline' size={size} color={color}  />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={HomeNavigator} />
      <Drawer.Screen name='Scheduled_Trip' component={ ScheduledNavigator } />
      <Drawer.Screen name='Booking' component={ DrawNavigator } />
      <Drawer.Screen name='About' component={ InfoNavigator } />

    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
