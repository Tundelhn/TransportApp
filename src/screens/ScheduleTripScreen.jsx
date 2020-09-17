import React from 'react';
import { View, Text, StyleSheet, Image,  TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Styles from "../config/styles";
import colors from "../components/colors";
import InputText from "../components/InputText";
import ApText from '../components/ApText';
import AppButton from "../components/AppButton";


export default function ScheduleTripScreen() {
  
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>
        <TouchableOpacity style={Styles.backward}>
          <Image source={require("../../assets/back.png")} />
        </TouchableOpacity>
        <Text style={Styles.Offer}>Schedule Trip</Text>
        <Image source={require("../../assets/i.png")} style={{left:200}}/>
      </View>
      <View style={Styles.seperator1}>
            <View style={Styles.Icon1}>
                <View style={{paddingTop:20}}>
                <Image source={require("../../assets/fieldCircle.png")}  />
                </View>
                <View style={{width: 300, alignItems: 'center'}}>
                <InputText  placeholder= 'Enter Your Starting Post'   boxStyle={{height:50, width: 280, right:10}} />
                </View>
            </View>
            <View style={{paddingLeft:38, paddingTop:35}}>
            <Image source={require("../../assets/dotLine.png")}  />
            </View>
            <View style={Styles.Icon2}>
                <View style={{paddingTop:20}}>
                <Image source={require("../../assets/inlineCircle.png")}  />
                </View>
                <View style={{width: 300, alignItems: 'center'}}>
                 <InputText  placeholder= 'Enter Drop off Post'  boxStyle={{height:50, width: 280, right:10}}/>
                </View>
             </View>
            </View>
      <View>
        <View>
        <ApText textStyle={{right: 105 }}>Departure Time</ApText>
            <View style={Styles.Icon4}>
                <View style={{paddingTop:20, left:16}}>
                <Image source={require("../../assets/timee.png")}  />
                </View>
                <View style={{flexDirection: 'row', }}>
                <View style={{width: 300, right:1 }}>
                 <InputText  placeholder= 'Enter meet up location'  />
                </View>
                <View style={Styles.calender}>
                <Image source={require("../../assets/calender.png")}   />
                </View>
                </View>
             </View>
             <View style={{top: 60}}>
                <ApText textStyle={{right: 40 }}>Vehicle (change vehicle from profile)</ApText>
                    <View style={Styles.Icon4}>
                       <Image source={require("../../assets/des.png")} style={{top:15, left: 15}} />
                        <InputText  placeholder= 'Audi 950 2020' boxStyle={{height:50, width: 280, right:10}} />
                    </View> 
             </View>
             <View style={{top: 120}}>
                <ApText textStyle={{right: 110 }}>Available Seat</ApText>
                    <View style={Styles.Icon4}>
                        <Image source={require("../../assets/seat.png")}  style={{top:15, left: 15}} />
                        <InputText  placeholder= 'select Available seat' boxStyle={{height:50, width: 280, right:10}} />
                    </View> 
             </View>
             <View style={{top: 180}}>
                <ApText textStyle={{right: 135 }}>Price</ApText>
                    <View style={Styles.Icon4}>
                        <Image source={require("../../assets/cash.png")}  style={{top:15, left: 15}} />
                        <InputText  placeholder= 'Enter Fee' boxStyle={{height:50, width: 280, right:10}} />
                    </View> 
             </View>
             <View style={{top: 240}}>
                <ApText textStyle={{right: 122 }}>Any Note</ApText>
                    <View style={Styles.Icon4}>
                        <Image source={require("../../assets/doc.png")}  style={{top:15, left: 15}} />
                        <InputText  placeholder= 'Enter any document note' boxStyle={{height:50, width: 280, right:10}} />
                    </View> 
             </View>
        <AppButton buttonStyle={{  top:300, backgroundColor: colors.blue, }}
                title='Proceed'
                textStyle={{
                  color: colors.white
                }}
              />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



