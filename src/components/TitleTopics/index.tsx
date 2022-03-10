import React from "react";
import { Text } from "react-native"
import { theme } from "../../lib/theme";

interface TitleProps {
children:string
}

export default function TitleTopics({children}: TitleProps) {
    return <Text style={{
        fontFamily: "MontBold",
        color: theme.white,
        fontSize: 20,
        marginBottom: 16,
        marginTop:32
    }}
    >
        {children}
    </Text>
}