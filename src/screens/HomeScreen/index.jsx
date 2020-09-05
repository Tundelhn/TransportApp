import React, { Component } from 'react';
import { View as Screens, Text as View } from 'react-native';
//import Screens from "../../component/Screens";



export default function index() {
    return (
        <Screens>
            <View>
                <View>
                <Image source={require("../../../assets/line.png")}  />
                <Image source={require("../../../assets/line.png")} style={{size:10}} />
                </View>
                <Image source={require("../../../assets/Alert.png")} style={{size:20}} />
            </View>
        </Screens>
    )
}
