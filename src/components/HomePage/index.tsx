import React from "react";
import { FlatList, Text, StatusBar,View } from "react-native"
import {style} from "./styles"
import Header from "./components/Header";
import Search from "./components/Search";
import AdviseArts from "./components/AdviseArts";
import AdvisePL from "./components/AdvisePL";
import TopMusic from "./components/TopMusic";
import TitleTopics from "../TitleTopics";
import Music from "../../../@types/Music";

export default function HomePage() {
    const data :Music[] = [
    {
        image:"https://lastfm.freetls.fastly.net/i/u/770x0/1fa918d3a5c45e706de673e9ea590117.jpg#1fa918d3a5c45e706de673e9ea590117",
        title:"Call 911",
        artist:"Trunks"
    }
]
    return<>
     <FlatList
        style={style.main}
        data={data}
        ListHeaderComponent={()=>{
            return<> 
            <Header/>
            <Search/>
            <AdviseArts/>
            <AdvisePL/>
            <TitleTopics>Músicas mais tocadas</TitleTopics>
            </>
        }}
        renderItem={({item, index}) => {
            return <TopMusic music={item} key={index}/>
        }}
        ItemSeparatorComponent={()=> {return <View style={{height:24}}/>}}
    />
     <StatusBar backgroundColor={"#333333"}/>
    </>
}