import { StyleSheet } from "react-native";
import { theme } from "../../../../lib/theme";

export const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:16
    },
    imageProfile:{
        height:50,
        width:32
    },
    imageButton:{
        width:32,
        height:32,
        overflow:"hidden",
        borderRadius:100
    },
    title:{
        fontFamily:"MontBold",
        color:theme.white,
        marginBottom:8,
        fontSize:26
    },
    text:{
        fontFamily:"Mont",
        color:theme.white,
        fontSize:16
    }
})