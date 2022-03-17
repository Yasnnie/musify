import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native"
import { style } from "./styles"
import Header from "./components/Header";
import Search from "./components/Search";
import AdviseArts from "./components/AdviseArts";
import AdvisePL from "./components/AdvisePL";
import TopMusic from "./components/TopMusic";
import TitleTopics from "../TitleTopics";
import Genres from "../../../@types/Genres";
import Music from "../../../@types/Music";
import { getRecommendType } from "../../services/getLists";
import { getRecommendMusic } from "../../services/getMusics";

interface DataProps{
    recommnedMusics: Music[]
    recommendType:  Genres[]
}

export default function HomePage() {
    const [data, setData] = useState<DataProps>({recommendType:[], recommnedMusics:[]})
  

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
      const r_musics =  await getRecommendMusic()
      const r_types =  await getRecommendType()
        console.log(r_types)
      setData({
          recommendType: r_types,
          recommnedMusics:r_musics
      })
    }

    return <>
        <FlatList
            style={style.main}
            data={data.recommnedMusics}
            ListHeaderComponent={() => {
                return <>
                    <Header />
                    <Search />
                    <AdviseArts />
                    <AdvisePL genres={data.recommendType}/>
                    <TitleTopics>Músicas mais tocadas</TitleTopics>
                </>
            }}
            renderItem={({ item, index }) => {
                return <TopMusic music={item} key={index} />
            }}
            ItemSeparatorComponent={() => { return <View style={{ height: 24 }} /> }}
        />
        <StatusBar backgroundColor={"#333333"} />
    </>
}