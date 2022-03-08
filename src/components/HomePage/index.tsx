import React from "react";
import { FlatList, View, StatusBar } from "react-native"
import {style} from "./styles"
import Header from "./components/Header";
import Search from "./components/Search";
import AdviseArts from "./components/AdviseArts";
import AdvisePL from "./components/AdvisePL";

export default function HomePage() {
    const data = [{
        title: "blabla",
        autor: "asndjkasd",
        image: "sakjdnjkasd"
    }]
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
            </>
        }}
        renderItem={() => {
            return <View />
        }}
    />
     <StatusBar backgroundColor={"#333333"}/>
    </>
}