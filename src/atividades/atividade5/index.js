import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles.js';

export default function Atividade5(){
    const [n1, setN1] = useState('0');
    const [n2, setN2] = useState('0');
    const [total, setTotal] = useState('0');

    function Soma() {
        const soma = (parseFloat(n1) || 0) + (parseFloat(n2) || 0);
        setTotal(soma.toString());
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade5</Text>

            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtLabel}>1° número</Text>
            <TextInput
                 style={styles.Entrada}
                 onChangeText={setN1}
                 value={n1}
                 keyboardType="numeric"
                />  

            <Text style={styles.txtSaida}>+</Text> 

            <Text style={styles.txtLabel}>2° número</Text>
            <TextInput 
                style={styles.Entrada}
                onChangeText={setN2}
                value={n2}
                keyboardType="numeric"
                />

            <Text style={[styles.txtSaida, {margin :0 }]}> </Text>


            <Text style={styles.txtLabel}>Total:</Text>
            <Text style={styles.txtSaida}>{total}</Text>

            <TouchableOpacity style={styles.botao} onPress={Soma}>
                <Text style={styles.txtBotao}>Somar</Text>
            </TouchableOpacity>

        </View>
    );
}

