import React from 'react';
import { View, Text, StyleSheet, Image,  Button, TouchableOpacity, SafeAreaView} from 'react-native';
import AppText from "../components/AppText";
import InputText from "../components/InputText";
import colors from "../components/colors";
import Styles from "../config/styles"
import AppButton from "../components/AppButton";
import ListItemSeperator from "../components/ListItemSeperator";


export default function WelcomScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={Styles.Img}>
                <TouchableOpacity style={{paddingRight:285}}>
                    <Image source={require("../../assets/back.png")}  />
                </TouchableOpacity>
            </View>
            <View style={Styles.seperator}>
            <View style={Styles.Icon1}>
                <View style={{paddingTop:20}}>
                <Image source={require("../../assets/fieldCircle.png")}  />
                </View>
                <View style={{width: 300, alignItems: 'center'}}>
                <InputText  placeholder= 'Enter Address'   />
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
              <InputText  placeholder= 'Enter meet up location' />
              </View>
            </View>
            </View>
            {/* <ListItemSeperator style={Styles.seperator} /> */}
            <View style={Styles.work}>
              <View style={Styles.home}>
              <Image source={require("../../assets/home1.png")} />
              <Text style={Styles.homes}> Add Home</Text>
              </View>
              <View style={Styles.home}>
              <Image source={require("../../assets/work.png")} />
              <Text style={Styles.homes}> Work Address</Text>
              </View>
            </View>
           <View style={{width:30,paddingTop:10}}></View>
            <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>ikoyi, Palm Viem</Text>
              </View>
              <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>Obalende</Text>
              </View>
              <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")} />
              <Text style={Styles.homes}> festac, Mile 2</Text>
              </View>
              <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>Alaba, Ojo</Text>
              </View>      
                <TouchableOpacity style={Styles.booking}>
                 <Image source={require("../../assets/booking.png")}  />
                   <Text style={Styles.bus}>Interstate Bus Booking</Text>
                </TouchableOpacity>
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



