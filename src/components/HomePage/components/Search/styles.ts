import { StyleSheet } from "react-native";
import { theme } from "../../../../lib/theme";

export const style = StyleSheet.create({
    main:{
        flex:1,
        marginHorizontal:16,
        marginTop:24,
        marginBottom:32
    },
    linear:{
        width:30,
        height:300,
        backgroundColor:theme.white,
        opacity:0.6
    }
})