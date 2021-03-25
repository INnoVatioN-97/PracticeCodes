import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"], 
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm :{
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"], 
        title: "Thunder storm in the house!",
        subtitle: "Actually, outside of the house"
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"], 
        title: "Drizzle",
        subtitle: "Is like rain, but gay..."
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MotherFucker",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"], 
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"], 
        title: "Atmosphere",
        subtitle: "what does it mean...?"
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: [ "#FF7300", "#FEF253"], 
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"], 
        title: "Clouds",
        subtitle: "I know, fuckin boring..."
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"], 
        title: "촉촉하게 맑게",
        subtitle: "자신있게"
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#111111", "#333333"], 
        title: "황사가 너무 쩝니다...",
        subtitle: "핑핑!"
    }
};

export default function Weather({ temp, condition }){
    return (
            <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 44,
        color: "white",
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});