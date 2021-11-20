import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import postLogin from '../../services/postLogin'

import style from './style';

export default function Login() {
  const [ userName, setUserName ] = useState("");
  const [ userPass, setUserPass ] = useState("");

  async function login() {
    try {
      const response = await postLogin(userName, userPass)
      if(response.data.conteudo.length <= 0) {
        setUserName('');
        setUserPass('');
      } else {
        await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      }
    } catch {
      setUserName('');
      setUserPass('');
    }
  }

  return (
    <View style={style.main}>
      <View style={style.interactionArea}>
        <Text style={style.mainText}>Informe o usuário e a senha encaminhados pela escola</Text>
        <View>
          <TextInput
            style={style.input}
            onChangeText={setUserName}
            value={userName}
            placeholderTextColor={"#fff"}
            placeholder="Usuário"
          />

          <TextInput
            style={style.input}
            secureTextEntry={true}
            onChangeText={setUserPass}
            value={userPass}
            placeholderTextColor={"#fff"}
            placeholder="Senha"
          />

          <TouchableOpacity 
            style={style.button}
            onPress={login}
          >
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={style.moreActions}>Esqueci Minha Senha | Política de Privacidade</Text>
      </View>
    </View>
  )
}