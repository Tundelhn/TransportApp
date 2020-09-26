import React from 'react';
import { View, Text, StyleSheet, Image,  FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import AppText from "../components/AppText";
import InputText from "../components/InputText";
import Card from "../components/Card";
import ListItemSeperator from "../components/ListItemSeperator";
import Styles from "../config/styles"
import Heading from "../components/Heading";

const event = [
  {
    id: 1,
    avatar: require("../../assets/car.png"),
    head: "Offer Ride",
    title: "Option for car owners",
    image: require("../../assets/vector.png"),    
  },
  {
    id: 2,
    avatar: require("../../assets/car.png"),
    head: "Insterstate Booking",
    image: require("../../assets/vector.png"),
  },
];
export default function WelcomScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={Styles.Imgg}>
                <TouchableOpacity style={Styles.icon}>
                <Image source={require("../../assets/Menu.png")}  />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../assets/Alert.png")} style={{marginRight:15}} />
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={styles.texts}>Good Morning,</Text>
                <AppText>Jonathan Doe</AppText>
            </View>
             <View style={styles.text}>
             <Text style={Styles.test}>Get Ride</Text>
                <Text style={Styles.tests}>Where To?</Text>
            </View>
            <View>
            <InputText style={Styles.search} placeholder='Enter Address' image={require("../../assets/search.png")} />
            </View>
            <View style={{paddingTop: 60, paddingLeft: 15}}>
              <View style={Styles.home}>
              <Image source={require("../../assets/home.png")} />
              <Text style={Styles.homes}> Add Home</Text>
              </View>
              <View style={Styles.home}>
              <Image source={require("../../assets/work.png")} />
              <Text style={Styles.homes}> Work Address</Text>
              </View>
            </View>
          <Text style={Styles.word}>Recent</Text>
           <View>
            <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>6391 Elgin St. Celina,Delaware 10299</Text>
              </View>
              <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")} />
              <Text style={Styles.homes}> 6391 Elgin St. Celina,Delaware 10299</Text>
              </View>
              <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")} />
              <Text style={Styles.homes}> 6391 Elgin St. Celina,Delaware 10299</Text>
              </View>
            </View>
            {/* <ListItemSeperator /> */}
         <View>
          <FlatList
            data={event}
            renderItem={({ item }) => (
            <Card
            avatar={item.avatar}
            title={item.title}
            head={item.head}
            image={item.image}
            onPress={() =>console.log('show')}
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
      paddingTop: 20,
      paddingLeft: 25
    },
    texts:{
      fontSize: 23,
      fontWeight: "bold"
    },
    
  });