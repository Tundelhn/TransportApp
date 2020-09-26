import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ApText from "./ApText";
import AppButton from "./AppButton";
import Styles from "../config/styles"
import colors from "./colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cards({image, start, fact, icon, date, person, art, ig, draw, message, address, local, profile, onPress}) {
  return (
    <View style={Styles.req}>
            <View style={Styles.up}>
               <Image  source={image}  />
               <View style={{marginRight:50}}>
                    <ApText>{start}</ApText>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={fact} size={15}  color={colors.orange} style={styles.icon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={fact} size={15}  color={colors.orange} style={styles.icon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={fact} size={15}  color={colors.orange} style={styles.icon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={fact} size={15}  color={colors.orange} style={styles.icon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={icon} size={15}  color={colors.mediun} style={styles.icon} />)}
                    </TouchableOpacity>
                    <ApText textStyle={{color:colors.gray, fontSize: 10, marginLeft:10 }}>{date}</ApText>
                 </View>
               </View>
                <View>
                <TouchableOpacity >
                      {icon && (<MaterialCommunityIcons name={person} size={25}  color={colors.gray} style={{alignSelf:'center'}} />)}
                    </TouchableOpacity>
                    <ApText>{message}</ApText>
                </View>
            </View>
            <View>
            <View style={Styles.con}>
                  <Image source={art} style={{marginRight:20}} />
                  <ApText >{address}</ApText>
                </View>
                <View style={{marginLeft:37}}>
                <Image source={draw}  />
             </View>
                <View style={Styles.Con}>
                  <Image source={ig}  style={{ bottom:5, marginRight:20}} />
                  <ApText >{local}</ApText>
                </View>
               </View>
           <View style={{flexDirection:'row', }}>
             <ApText  textStyle={{color:colors.blue, fontWeight: '500', paddingLeft:20, paddingTop:10 }}>{profile}</ApText>
             <View style={Styles.but}>
              <AppButton 
              buttonStyle={{ top:0, height:20, width: 70, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.blue, right:50}}
              onPress={() =>console.log('Go ahead')} 
              title='Decline' 
              textStyle={{
                  color: colors.blue, fontSize: 11
                }}
              />
              <AppButton
              buttonStyle={{top:0, height:20, width:70, backgroundColor: colors.blue,left:5}}   
                onPress={() =>console.log('Cancel')}
                title='Accept'
                textStyle={{ fontSize: 11 }}
              />
            </View>
          </View> 
            
    </View>
  );
}

const styles = StyleSheet.create({})