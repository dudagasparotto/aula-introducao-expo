import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from  '../styles.js'

export default function Exemplo04(){
    const [mensagem, setMensagem] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{mensagem}</Text>

            <TextInput 
                onChangeText={setMensagem}
                placeholder='digite sua mensagem' 
                keyboardType='ascii-capable'
                style={styles.input}
                value={mensagem}
            />

            {/* Se quiser manter o botão para limpar, pode adicionar aqui */}
            {/*
            <TouchableOpacity
                style={styles.botao}
                onPress={() => setMensagem('')}
            >
                <Text style={styles.txtBotao}>Limpar</Text>
            </TouchableOpacity>
            */}
        </View>
    );
}

