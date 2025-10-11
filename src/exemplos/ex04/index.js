import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from  './styles.js'

export default function Exemplo04(){
    const [texto, setTexto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [txt2, setTxt2] = useState('valor');

    function handleExibirMensagem(){
        setMensagem(txt2);
        setTxt2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <TextInput 
                onChangeText={setTexto}
                value={texto}
                placeholder='digite sua mensagem' 
                keyboardType='visible-password'
                style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2}
                style={styles.input}
                onChangeText={setTxt2}
                placeholder="Digite algo"
                keyboardType='ascii-capable'

            />
            
            
            <TouchableOpacity
                style={styles.botao}
                onPress={handleExibirMensagem}
            >
                
            <Text style={styles.txtBotao}>Atualizar</Text>
            </TouchableOpacity>
        </View>
    );
}

