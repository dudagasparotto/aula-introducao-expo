import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';

import styles from './styles';

export default function Exemplo05() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2); 
        setTotal(conta.toString()); 
    }

    function multiplicacao() {
        const conta = parseInt(n1) * parseInt(n2); 
        setTotal(conta.toString()); 
    }

    function divisao() {
        const conta = parseInt(n1) / parseInt(n2); 
        setTotal(conta.toString()); 
    }

    function subtracao() {
        const conta = parseInt(n1) - parseInt(n2); 
        setTotal(conta.toString()); 
    }
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                ATIVIDADE 05
            </Text>

    <Text style={styles.paragraph}>ATIVIDADE 05</Text>
    <Text style={styles.txtSaida}>Calculadora básica</Text>


    <Text style={styles.textLabel}> 1° número </Text>
    <TextInput style={styles.txtEntrada}
        onChangeText={(entrada) => setN1(entrada)}
        value={n1}
    />

    <Text style={styles.txtSaida}> + </Text>

    <Text style={styles.textLabel} > 2° número </Text>
    <TextInput style={styles.txtEntrada}
        onChangeText={(entrada) => setN2(entrada)}
        value={n2}
    />

    <TouchableOpacity style={styles.button} onPress={() => Soma()    }>
        <Text style={styles.textButton}> + </Text>
    </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => multiplicacao()    }>
        <Text style={styles.textButton}> * </Text>
    </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => divisao()    }>
        <Text style={styles.textButton}> / </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => subtracao()    }>
        <Text style={styles.textButton}> - </Text>
    </TouchableOpacity>

    <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>
    <Text style={styles.textLabel}> Total </Text>
    <TextInput style={styles.txtEntrada}
        editable={false}
        value={total}
    />
    
</View>



    );
}
