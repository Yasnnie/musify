import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native"
import {style} from "./styles"

interface CardAdvisePL{
    name:string,
    image:string
}

export default function AdvisePL() {
    const data = [
        {
            name: "Rap underground",
            image: "https://t2.genius.com/unsafe/327x218/https%3A%2F%2Fimages.rapgenius.com%2F07104efc04e64a6c52e70b520a896eec.500x333x1.jpg"
        },
        {
            name: "Músicas para andar de skate",
            image: "https://revolutionradio.com.br/wp-content/uploads/Duane-Peters.jpg"
        },
        {
            name: "Lo-fi Hip-hop",
            image: "https://lh3.googleusercontent.com/vQwKzQ9Q4Uu0K6j-UcB8M9tmRq8HstfPlwRduP_k5IdlUAq0J_ziIfLv3NBSwwrGQsXjUW-gOEsNOXxB0I11lWPH9g=w640-h400-e365-rj-sc0x00ffffff"
        }
    ]

    function CardAdvisePL(props:{item: CardAdvisePL, index: number}){
        return <ImageBackground 
        style={style.card}
        source={{uri:props.item.image}}
        >
            <Text style={style.text}>{props.item.name}</Text>
        </ImageBackground>
    }

    return <View style={style.container}>
        <Text style={style.title}>Playlists para você</Text>
        <FlatList
            data={data}
            renderItem={(item) => CardAdvisePL(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
}