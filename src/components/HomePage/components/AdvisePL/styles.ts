import { StyleSheet } from "react-native";
import { theme} from "../../../../lib/theme"
export const style = StyleSheet.create({
   
    card:{
        width: 139,
        height: 99,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        borderRadius:16,
   
    },
    text:{
        fontFamily:"MontBold",
        fontSize:20,
        color:theme.white,
        textAlign:"center",
        lineHeight:20
    }

})