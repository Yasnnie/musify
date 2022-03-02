import React, { useState } from "react";
import { View, TextInput, Animated } from "react-native"
import { style } from "./styles"

interface InputProps {
    label: string
}

export default function Input({ label }: InputProps) {
    const [text, setText] = useState("")
    const [onSelectX] = useState(new Animated.Value(16))

    function handleSelect(onSelect: boolean) {
        Animated.timing(onSelectX, {
            toValue: onSelect ? -400 : 16,
            duration: 700,
            useNativeDriver: false,
        }).start();
    }

    return <View style={style.container}>
        {!text && <Animated.Text style={[style.label, { left: onSelectX }]}>{label}</Animated.Text>}
        <TextInput
            style={{ width: "100%" }}
            onBlur={() => handleSelect(false)}
            onFocus={() => handleSelect(true)}
            onChangeText={(text) => {
                setText(text)
            }}
        />
    </View>
}