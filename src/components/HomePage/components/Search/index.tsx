import React,{useRef, useState} from "react";
import {View, Animated} from "react-native"
import Input from "../../../Input";
import { style } from "./styles";

export default function Search(){
    return <View style={style.main}>
        <Input label="Pesquise aqui..."/>
    </View>
}