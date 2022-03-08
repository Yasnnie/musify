import { StyleSheet } from "react-native";
import { theme} from "../../../../lib/theme"
export const style = StyleSheet.create({
    container:{
        marginHorizontal:8,
        marginTop:24
    },
    title:{
        fontFamily:"MontBold",
        color: theme.white,
        fontSize:20,
        marginBottom:12,
        marginLeft: 8
    },
    card:{
        width: 139,
        height: 99,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
    },
    text:{
        fontFamily:"MontBold",
        fontSize:16,
        color:theme.white,
        lineHeight:20
    }

})