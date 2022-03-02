import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../lib/theme";

const PAGE_WIDTH = Dimensions.get("window").width
const PAGE_HEIGHT= Dimensions.get("window").height

export const style = StyleSheet.create({
    background:{
        width:PAGE_WIDTH,
         height:PAGE_HEIGHT,
         position:"relative"
    },
    container:{
        backgroundColor: "#fff",
        position:"absolute",
        bottom:0,
        left:0,
        width:PAGE_WIDTH,
        borderTopStartRadius:40,
        borderTopEndRadius:40,
        paddingHorizontal:16,
        paddingTop:24,
        paddingBottom:32
    },
    title:{
        fontFamily:"MontBold",
        fontSize:20,
        lineHeight:28, 
        marginBottom:8,
        color:theme.black
    },
    text:{
        fontFamily:"Mont",
        fontSize:16,
        lineHeight:25.6,
        color:theme.black,
        marginBottom:16,
    },
    viewSignOut:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,
        marginTop:24
    },
    textSignOut:{
        fontFamily:"MontBold",
        color:theme.yellow,
        textDecorationLine:"underline"
    },
    button:{
        height:65,
        borderRadius:100,
        backgroundColor:theme.yellow,
        alignItems:"center",
        justifyContent:"center"
    },
    textButton:{
        fontFamily:"MontBold",
        color:theme.white,
        fontSize:16
    }
  
})