import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from  './styles.js'

export default function Exemplo04(){
    const [texto, setTexto] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleExibirMensagem(){
        setMensagem(texto);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{mensagem}</Text>

            <TextInput 
                onChangeText={setTexto}
                value={texto}
                placeholder='digite sua mensagem' 
                keyboardType='ascii-capable'
                style={styles.input}
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

