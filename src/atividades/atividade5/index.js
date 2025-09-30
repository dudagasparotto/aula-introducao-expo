import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from  './styles.js'

export default function Exemplo04(){
    const [mensagem, setMensagem] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade5</Text>

            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtLabel}>1° número</Text>
            <TextInput style={styles.Entrada}/>   

            <Text style={styles.txtLabel}>2° número</Text>
            <TextInput style={styles.Entrada}/>

            <Text style={[styles.txtSaida, {margin :0 }]}> </Text>


            <Text style={styles.textLabel}> Total:</Text>
            <TextInput style={styles.txtEntrada}/>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

        </View>
    );
}

