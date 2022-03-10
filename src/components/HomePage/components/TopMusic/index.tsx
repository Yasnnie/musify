import React from "react";
import { TouchableHighlight, Image, View, Text, TouchableOpacity } from "react-native"
import Music from "../../../../../@types/Music";
import {style} from "./styles"
interface TopMusicProps{
    music: Music
}

export default function TopMusic({music}:TopMusicProps) {
    return <TouchableOpacity  style={style.container}>
        <View style={style.infoView}>
            <Image source={{uri:music.image}} width={54} height={54} style={style.image}/>
            <View >
                <Text style={[style.text,style.titleMusic]}>{music.title}</Text>
                <Text style={[style.text,style.nameArtist]}>{music.artist}</Text>
            </View>
        </View>

        <TouchableOpacity  style={style.dotsView}>
            <View style={style.dots}/>
            <View style={style.dots}/>
            <View style={style.dots}/>
        </TouchableOpacity >
    </TouchableOpacity >
}