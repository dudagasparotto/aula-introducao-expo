
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from  './styles.js'

export default function Exemplo04(){
    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('valor');
    const [mensagem, setMensagem] = useState('');

    function handleExibirMensagem(){
        setMensagem(texto);
        setTxt2(''); //limpa o campo
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}> {titulo} </Text>

            <TextInput 
                onChangeText={setTexto}
                placeholder='texto de fundo' 
                //keyboardType='visible-passaword'
                maxLength={10}
                keyboardType='ascii-capable'
                style={styles.input}

            />

            <Text style ={styles.txt}> {mensagem} inicial</Text>
            <TextInput 
                onChangeText={setTexto}
                placeholder='digite sua mensagem' 
                //keyboardType='visible-passaword'
                //maxLength={10} //limita a qtde de caracteres
                keyboardType='ascii-capable'
                style={styles.input}
                //value={txt2} //nao deixa digitar
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibirMensagem ()}
            >
                <Text style={styles.txtBotao}>Atualizar</Text>
            </TouchableOpacity>

        </View>
    );
}

