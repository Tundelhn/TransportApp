import React, { useState }from 'react';
import { View, Text, StyleSheet, Image, Modal,  TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Styles from "../config/styles";
import colors from "../components/colors";
import InputText from "../components/InputText";
import ApText from '../components/ApText';
import AppButton from "../components/AppButton";


export default function ScheduleTripScreen() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={Styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.Trip}>Trip Summary</Text>
            <View style={Styles.V}>
              <Text>From</Text>
              <TextInput placeholder=' Festac, Lagos' style={Styles.M} />
            </View>
            <View style={Styles.flexDirection}>
              <Text>To</Text>
              <TextInput placeholder=' Iyano, Lagos' style={Styles.M} />
            </View>
            <View style={{ flexDirection: 'row', bottom: 20 }}>
              <View style={Styles.Touch}>
                <Text>Price</Text>
                <TextInput placeholder='  N500' style={Styles.sy} />
              </View>
              <View style={{ flexDirection: 'column', left: 143, }}>
                <Text>Date</Text>
                <TextInput placeholder='  5/27/15 12:00' style={Styles.sy} />
              </View>
              <View style={Styles.c}>
                <Text style={{ color: colors.gray }}>Are you sure you want to schedule this trip</Text>
              </View>
            </View>
            <View style={Styles.wit}>
              <AppButton buttonStyle={{   width:130, backgroundColor: colors.blue, }} title='Confirm' />
              <AppButton
                buttonStyle={{ width: 130, backgroundColor: colors.white, color: "#000", borderWidth: 1, borderColor: colors.blue }}
                onPress={() => { setModalVisible(!modalVisible) }}
                title='Cancel'
                textStyle={{
                  color: colors.blue
                }}
              />

            </View>
          </View>
        </View>
      </Modal>
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
                onPress={() => setModalVisible(true)}
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



