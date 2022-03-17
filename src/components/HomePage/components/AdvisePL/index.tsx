import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native"
import Genres from "../../../../../@types/Genres";
import TitleTopics from "../../../TitleTopics";
import {style} from "./styles"



interface AdvisePLProps{
    genres: Genres[]
}

export default function AdvisePL({genres}:AdvisePLProps) {
    
    function CardAdvisePL(props:{item: Genres, index: number}){
        return <ImageBackground 
        style={style.card}
        source={{uri:"https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/7b/42/b9/7b42b98f-0be0-7fa6-40a1-c59c2d460a60/mzl.xxsyszlu.png/800x800cc.jpg"}}
        >
            <Text style={style.text}>{props.item.name}</Text>
        </ImageBackground>
    }

    return <>
        <TitleTopics >Playlists para você</TitleTopics >
        <FlatList
            data={genres}
            renderItem={(item) => CardAdvisePL(item)}
            ItemSeparatorComponent={()=> {return <View style={{ width:16}}/>}}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </>
}