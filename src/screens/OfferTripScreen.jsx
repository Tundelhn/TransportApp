import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Offer from "../components/Offer";
import Styles from "../config/styles";
import colors from "../components/colors";
//import InputText from "../components/InputText";
import AppButton from "../components/AppButton";
//import ListItemSeperator from "../components/ListItemSeperator";

const trip = [
  {
    id: 1,
    local: 'Festac',
    time: '7.00am',
    head: 'Obalende',
    image: require("../../assets/vehicle.png"),
    avater: require("../../assets/motor.png"),
    car: "Toyota camry",
    icon: require("../../assets/user.png"),
    passenger: "1-5 Passengers",
    sign: require("../../assets/dollar.png"),
    num: "N100",
    title: 'Activate',
  },
  {
    id: 2,
    local: 'Ipaja',
    time: '7.00am',
    head: 'Barracks',
    image: require("../../assets/vehicle.png"),
    avater: require("../../assets/motor.png"),
    car: "Innoson",
    icon: require("../../assets/user.png"),
    passenger: "1-4 Passengers",
    sign: require("../../assets/dollar.png"),
    num: "N700",
    title: 'Activate',
  },
];

export default function OfferTripScreen() {
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
              <AppButton style={{ width: 130, backgroundColor: colors.blue, }} title='Confirm' />
              <AppButton
                style={{ width: 130, backgroundColor: colors.white, color: "#000", borderWidth: 1, borderColor: colors.blue }}
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
        <Text style={Styles.Offer}>Offer Trip</Text>
      </View>
      <Text style={Styles.testx}>Saved Trip</Text>
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
              onPress={() => setModalVisible(true)}
            />
          )}
        />
        <TouchableOpacity style={Styles.prexx}  >
          <View>
            <Text style={{ color: colors.white }}>Schedule New Trip</Text>
          </View>
        </TouchableOpacity>
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



