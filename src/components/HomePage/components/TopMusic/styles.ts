import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../../lib/theme";

const widthScreen = Dimensions.get("window").width

export const style = StyleSheet.create({
    container:{
        width:widthScreen - 32,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    infoView:{
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        width:54,
        height:54,
        borderRadius:8,
        overflow:"hidden",
        marginRight:16
    },
    text:{
        color:theme.white,
        fontSize:14,
        lineHeight:22
    },
    titleMusic:{
        fontFamily:"MontBold",
    },
    nameArtist:{
        fontFamily:"Mont",
        opacity:0.5
    },
    dotsView:{
        height:20,
        justifyContent:"space-between",
        paddingRight:10,
        paddingLeft:20,
        paddingVertical:2
    },
    dots:{
        width:4,
        height:4,
        borderRadius:50,
        backgroundColor:theme.white,
    }
})