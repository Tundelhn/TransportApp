import React from 'react';
import { View, Text, StyleSheet, Image,  FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import InputText from "../components/InputText";
import DestinePart from "../components/DestinePart";
import Styles from "../config/styles"
import ListItemSeperator from "../components/ListItemSeperator";

const local = [
    {
      id: 1,
      begin: 'Festac',
      time: '7.00am',
      destin: 'Obalende',
      image: require("../../assets/cruise.png"),   
      motor: "Toyota camry", 
      arrow: require("../../assets/front.png"),
      seat: '6 seats',
      naira: "N100", 
    },
    {
      id: 2,
      begin: 'Alaba',
      time: '5.00am',
      destin: 'Ipaja-ojo',
      image: require("../../assets/cruise.png"),   
      motor: "Lexus 360", 
      arrow: require("../../assets/front.png"),
      seat: '4 seats',
      naira: "N500", 
    },
    {
      id:3 ,
      begin: 'Festac',
      time: '7.30pm',
      destin: 'Obalende',
      image: require("../../assets/cruise.png"),   
      motor: "Jeep", 
      arrow: require("../../assets/front.png"),
      seat: '2 seats',
      naira: "N900", 
    },
    {
      id: 4,
      begin: 'Alaba',
      time: '7.00am',
      destin: 'Ajegunle',
      image: require("../../assets/cruise.png"),   
      motor: "Mezedece ", 
      arrow: require("../../assets/front.png"),
      seat: '5 seats',
      naira: "N300", 
    },
    {
      id: 5,
      begin: 'Iyano-Iba',
      time: '6.30am',
      destin: 'iyanopaja',
      image: require("../../assets/cruise.png"),   
      motor: "Offer Ride", 
      arrow: require("../../assets/front.png"),
      seat: '2 seats',
      naira: "N800", 
    }, 
  ];

export default function DestinationPartScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={Styles.Img}>
                <TouchableOpacity style={{paddingRight:300}} onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../assets/back.png")}  />
                </TouchableOpacity>
            </View>
            <View style={Styles.seperator}>
            
            <View style={{paddingTop: 20}}>
              <InputText  placeholder= 'Festac'  image={require("../../assets/fieldCircle.png")}/>
            </View>
          <View style={{paddingTop: 45}}>
            <InputText  placeholder= 'lagos'  image={require("../../assets/inlineCircle.png")}/>
         </View>
         <View style={Styles.lineJoin}>
            <Image source={require("../../assets/dotted.png")}  />
          </View>
        </View>
            
            <View>
          <FlatList
            data={local}
            renderItem={({ item }) => (
            <DestinePart
            begin={item.begin}
            time={item.time}
            destin={item.destin}
            image={item.image}
            motor={item.motor}
            arrow={item.arrow}
            seat={item.seat}
            naira={item.naira}
            onPress={() =>console.log('local')}
          />
        )}
        ItemSeperatorComponent={ListItemSeperator}
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
      paddingTop: 30,
      paddingLeft: 25
    },
    texts:{
      fontSize: 23,
      fontWeight: "bold"
    },
    
  });



