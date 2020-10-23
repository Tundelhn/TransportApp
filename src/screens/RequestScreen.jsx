import React from 'react';
import { View, Text, StyleSheet, Image,  FlatList} from 'react-native';
import ApText from "../components/ApText";
import colors from "../components/colors";
import Cards from "../components/Cards";
import Cad from "../components/Cad";
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator";
import Styles from "../config/styles"
import { MaterialCommunityIcons } from "@expo/vector-icons";

const event = [
  {
    id: 1,
    image :require("../../assets/man.png"),
    start: 'Annetta Block', 
    icon1:'star', 
    icon: 'star-outline',
    date: 4.1/5, 
    person: 'message-text-outline', 
    art : require("../../assets/fieldCircle.png"), 
    ig: require("../../assets/inlineCircle.png"), 
    draw: require("../../assets/dotted.png"),  
    message:'Message', 
    address: '2973 Westheilmer Road, Santa 4058', 
    local: '2973 Manchester Road, Santa 4058', 
    profile: 'View profile', 
  },
  {
    id: 2,
    image :require("../../assets/man.png"),
    start: 'Fitiri Block', 
    icon1:'star', 
    icon: 'star-outline',
    date: 4.1/5, 
    person: <MaterialCommunityIcons name='message-text-outline' color ='#eeced'  />, 
    art : require("../../assets/fieldCircle.png"), 
    ig: require("../../assets/inlineCircle.png"), 
    draw: require("../../assets/dotted.png"),  
    message:'Message', 
    address: '2973 Ojota Road, Iba 3678', 
    local: '2973 Manchester Road, Bunley 4058', 
    profile: 'View profile', 
  },
  {
    id: 3,
    image :require("../../assets/man.png"),
    start: 'Annetta Block', 
    icon1:'star', 
    icon: 'star-outline',
    date: 4.1/5, 
    person: <MaterialCommunityIcons name='message-text-outline' color ='#eeced'  />, 
    art : require("../../assets/fieldCircle.png"), 
    ig: require("../../assets/inlineCircle.png"), 
    draw: require("../../assets/dotted.png"),  
    message:'Message', 
    address: '2973 Westheilmer Road, Santa 4058', 
    local: '2973 Manchester Road, Ghana 4058', 
    profile: 'View profile', 
  },

];
export default function RequestScreen() {
  return (
    <View style={styles.container}>
     <Heading icon='arrow-left'  title='Requests' onPress={() =>console.log('Go ahead')}  />
     <Cards 
     avatar ={require("../../assets/front.png")}
      start ='Alaba'
      image={require("../../assets/cruise.png")}
      time ='8.00am'
      end ='Ojota'
       seat='6 seats'
       cash='N550'
      car ='Innoson'
     />
     <ApText textStyle={{ paddingTop:20, marginRight:210}}>You have 3 requests</ApText>
     <View>
          <FlatList
            data={event}
            keyExtractor={(event) => event.id.toString()}
            renderItem={({ item }) => (
            <Cad
            image={item.image}
            start={item.start}
            fact={item.icon1}
            icon={item.icon}
            date={item.date}
            person={item.person}
            art={item.art}
            draw={item.draw}
            ig={item.ig}
            message={item.message}
            profile={item.profile}
            address={item.address}
            local={item.local}
            onPress={() =>console.log('show')}
          />
        )}
        ItemSeperatorComponent={ListItemSeperator}
        /> 
          </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor:colors.gray

  },
});
