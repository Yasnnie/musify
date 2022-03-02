import React from "react";
import {View, TouchableOpacity, Text, Image} from "react-native"
import Profile from "../../../../assets/profile.jpg"
import { style } from "./styles";

export default function Header(){
    return <View style={style.container}>
        <View>
            <Text style={style.title}>Olá Mariana,</Text>
            <Text style={style.text}>O que deseja ouvir?</Text>
        </View>
        <TouchableOpacity style={style.imageButton}>
            <Image source={Profile} style={style.imageProfile} resizeMode="contain"/>
        </TouchableOpacity>
    </View>
}