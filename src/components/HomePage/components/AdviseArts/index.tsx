import React from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { style } from "./styles"

interface ArtsProps {
    name: string,
    type: string,
    image: string
}

export default function AdviseArts() {
    const data: ArtsProps[] = [
        {
            name: "Jimin",
            type: "Kpop",
            image: "https://portalpopline.com.br/wp-content/uploads/2022/02/jimin.jpg"
        },
        {
            name: "Arina Grande",
            type: "Pop",
            image: "https://thatgrapejuice.net/wp-content/uploads/2020/10/ariana-grande-positions-era-thatgrapejuice-2020-600x600.jpg.webp"
        },
        {
            name: "The Weeknd",
            type: "Pop",
            image: "https://variety.com/wp-content/uploads/2020/06/unnamed-1-2-e1593560403821.jpg?w=681&h=383&crop=1&resize=681%2C383"

        }
    ]

    function CardArts(props: { item: ArtsProps, index: number }) {
        return <TouchableOpacity key={props.index} style={style.mainCard}>
            <ImageBackground
                style={style.cardContainer}
                source={{ uri: props.item.image }}
                imageStyle={style.cardContainer}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={style.viewInfo}
                >
                    <Text style={style.nameArtist}>{props.item.name}</Text>
                    <Text style={style.typeMusic}>{props.item.type}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    }

    return <View style={style.container}>
        <Text style={style.title}>Artistas recomendados</Text>
        <FlatList
            data={data}
            renderItem={(item) => CardArts(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
}