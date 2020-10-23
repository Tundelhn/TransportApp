import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Heading from "../components/Heading";
import Inform from "../components/Inform";
import Information from "../components/Information";
import Styles from "../config/styles";

const information = [
  {
    id: 1,
    ride:'Promo',
    time:'1hr ago',
    local:'Earn reward on every ride',
    name:'This is suppose to be a dummy notification message to user.This is suppose to be a dummy notification message to user. ',
    image: require("../../assets/ward.png")
  },
  {
    id: 2,
    ride:'Ride Request',
    time:'2hrs ago',
    local:'Congratulations!',
    name:'You got 5stars from Lanry global consulting!!',
    image: require("../../assets/ward.png")
  },
  {
    id: 3,
    ride:'Message',
    time:'5min ago',
    local:'Neville Graffine message you',
    name:'You got 5stars from Lanry global consulting!!',
    image: require("../../assets/ward.png")
  },
  {
    id: 3,
    ride:'Message',
    time:'5min ago',
    local:'Neville Graffine message you',
    name:'You got 5stars from Lanry global consulting!!',
    image: require("../../assets/ward.png")
  },
  {
    id: 3,
    ride:'Message',
    time:'5min ago',
    local:'Neville Graffine message you',
    name:'You got 5stars from Lanry global consulting!!',
    image: require("../../assets/ward.png")
  },
  
];
export default function NotificationScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <Heading icon='menu'  title='Notification' onPress={() =>console.log('Go ahead')}  />
           <View style={Styles.Notes}>
             <Inform /> 
           </View>
           <View style={Styles.Note}>
            <FlatList
              data={information}
              renderItem={({ item }) => (
              <Information
              ride={item.ride}
              time={item.time}
              local={item.local}
              image={item.image}
              name={item.name}
              onPress={() =>console.log('show')}
            />
          )}
          /> 
           </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    text:{
      paddingTop: 20,
      paddingLeft: 25
    },
    texts:{
      fontSize: 23,
      fontWeight: "bold"
    },
    
  });