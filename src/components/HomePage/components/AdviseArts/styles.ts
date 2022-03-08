import { StyleSheet } from "react-native";
import { theme} from "../../../../lib/theme"
export const style = StyleSheet.create({
    container:{
        marginHorizontal:8
    },
    title:{
        fontFamily:"MontBold",
        color: theme.white,
        fontSize:20,
        marginBottom:12,
        marginLeft: 8
    },
    mainCard:{
        overflow:"hidden",
        position:"relative",
        marginHorizontal:8,
        borderRadius:16, 
    },
    cardContainer:{
        width: 197,
        height: 205,
        borderRadius:16, 
    },
    viewInfo:{
        width: 197,
        height:104,
        position:"absolute",
        bottom:0,
        left:0,
        justifyContent:"flex-end",
        padding:16,
    
    },
    nameArtist:{
        fontFamily:"MontBold",
        fontSize:16,
        color:theme.white,
        lineHeight:20
    },
    typeMusic:{
        fontFamily:"Mont",
        fontSize:12,
        color:theme.white,
        lineHeight:17
    }
})