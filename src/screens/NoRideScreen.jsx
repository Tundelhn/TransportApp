import React from 'react';
import { View, Text, StyleSheet, Image,  FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import InputText from "../components/InputText";
import DestinePart from "../components/DestinePart";
import Styles from "../config/styles"
import colors from "../components/colors";

export default function NoRideScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={Styles.Img}>
                <TouchableOpacity style={{paddingRight:300}}>
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
           <View style={Styles.ri}>
             <Text >There is no ride available to your desired destination</Text>
          </View> 
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
  });



