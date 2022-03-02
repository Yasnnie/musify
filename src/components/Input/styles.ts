import {StyleSheet, Dimensions} from "react-native"
import { theme } from "../../lib/theme"

export const style = StyleSheet.create({
    container:{
        backgroundColor:theme.grey50,
        borderRadius:100,
        height:52,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        position:"relative",
        overflow:"hidden"
    },
    label:{
        position:"absolute",
        fontFamily:"Mont",
        fontSize:15,
        color:theme.black,
        opacity:0.3
    }
})