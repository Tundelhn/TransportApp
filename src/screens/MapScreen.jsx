import React from 'react';
import { View, Text, StyleSheet, Image,  Button, TouchableOpacity, SafeAreaView} from 'react-native';
import AppText from "../components/AppText";
import InputText from "../components/InputText";
import Card from "../components/Card";
import MapPreview from "../components/MapPreview";
import colors from "../components/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Styles from "../config/styles"
import AppButton from "../components/AppButton";


export default function WelcomScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <MapPreview />
            </View>
            
            <View style={{borderRadius:10,  borderTopWidth: 0.3}}>
             <View style={styles.text}>
                <Text style={Styles.tests}>Where To?</Text>
            </View>
            <View>
              <InputText style={Styles.search}/>
            </View>
            <View style={Styles.work}>
              <View style={Styles.home}>
              <Image source={require("../../assets/house.png")} />
              <Text style={Styles.homes}> Add Home</Text>
              </View>
              <View style={Styles.home}>
              <Image source={require("../../assets/case1.png")} />
              <Text style={Styles.homes}> Work Address</Text>
              </View>
            </View>
          <Text style={Styles.word}>Recent</Text>
            <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>6391 Elgin St. Celina,Delaware 10299</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={Styles.customBtn}>
                   <AppButton title="Book Ride" color="sky"  />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.customBtn1}>
                    <Text style={Styles.customText}>Book Ride</Text>
                </TouchableOpacity>
            </View>
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



