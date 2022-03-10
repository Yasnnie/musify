import React from "react";
import { ScrollView, ImageBackground, Text, View, TouchableOpacity, Linking } from "react-native"
import { StatusBar } from "expo-status-bar";
import Input from "../Input";
import { style } from "./styles";
import { ServiceLogin } from "../../services/login";
import Fundo from "../../assets/Fundo.png"
export default function Login() {
    return <>
    <ScrollView>
        <ImageBackground source={Fundo}  style={style.background}>
            <View style={style.container}>
                <Text style={style.title}>Olá</Text>
                <Text style={style.text}>Acesse com seus dados para entrar na sua conta ou crie uma nova</Text>
                <Input label="Digite seu e-mail" />
                <View style={{height:24}}/>
                <Input label="Digite sua senha" />
                <View style={style.viewSignOut}>
                    <Text style={style.text}>Não tem uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={[style.text, style.textSignOut]}> Crie uma aqui</Text>
                    </TouchableOpacity>
                </View>
                 
                <TouchableOpacity style={style.button} onPress={()=> {Linking.openURL("https://accounts.spotify.com/authorize/?client_id=0d400a35e08c48f5bf40e68bcf914e4d&response_type=code&redirect_uri=com.yasnnie.musify://callback")}}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    </ScrollView>
    <StatusBar/>
    </>
}