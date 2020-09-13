import React from 'react';
import { View, Text, StyleSheet, Image,  FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import Offer from "../components/Offer";
import Styles from "../config/styles";
import colors from "../components/colors";
import AppButton from "../components/AppButton";
//import ListItemSeperator from "../components/ListItemSeperator";

const trip = [
    {
      id: 1,
      local: 'Festac',
      time: '7.00am',
      head: 'Obalende',
      image: require("../../assets/vehicle.png"),   
      avater:  require("../../assets/motor.png"),
      car: "Toyota camry",
      icon: require("../../assets/user.png"),
      passenger: "1-5 Passengers", 
      sign: require("../../assets/dollar.png"),
      num: "N100", 
      title:'Activate',
    },
    {
      id: 2,
      local: 'Ipaja',
      time: '7.00am',
      head: 'Barracks',
      image: require("../../assets/vehicle.png"),   
      avater:  require("../../assets/motor.png"),
      car: "Innoson",
      icon: require("../../assets/user.png"),
      passenger: "1-4 Passengers", 
      sign: require("../../assets/dollar.png"),
      num: "N700", 
      title:'Activate',
    },
  ];

export default function OfferTripScreen() {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.view}>
                <TouchableOpacity style={Styles.backward}>
                    <Image source={require("../../assets/back.png")}  />
                </TouchableOpacity>
                <Text style={Styles.Offer}>Offer Trip</Text>
            </View>
            <Text style={Styles.testx}>Safe Trip</Text>
            <View>
          <FlatList
            data={trip}
            renderItem={({ item }) => (
            <Offer
            local={item.local}
            time={item.time}
            head={item.head}
            image={item.image}
            avater={item.avater}
            car={item.car}
            icon={item.icon}
            passenger={item.passenger}
            sign={item.sign}
            num={item.num}
            title={item.title}
            onPress={() =>console.log('local')}
          />
        )}
        //ItemSeperatorComponent={ListItemSeperator}
        /> 
        <TouchableOpacity style={Styles.prexx}  >
            <View>
              <Text style={{color:colors.white}}>Schedule New Trip</Text>
              </View>
        </TouchableOpacity>
          </View> 
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
  });



