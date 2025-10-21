import React, {useState} from 'react'; 
import  {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 

import styles from './styles';

export default function Exemplo06 (){

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular(){
        const valor = massa / (altura * altura);
        setResultado(valor);

    if (valor < 18.5 ){
        console.log('Abaixo do peso');
    } 
    if (valor >= 18.5 && valor < 24.9){
        console.log('Peso ideal');
    }
    if (valor >= 25 && vaor < 29.9){
        console.log('Sobrepeso');
    }
    if (valor >= 30 && valor < 34.9){
        console.log('Obesidade grau 1');
    }
    if (valor >= 35 && valor < 39.9){
        console.log('Obesidade grau 2 (severa)');
    }
    if (valor >= 40){
        console.log('Obesidade grau 3 (mórbida)');
    }

    } 


    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 6</Text>

            <View style={styles.entradaImc}>
                <TextInput 
                placeholder='Massa' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setMassa (entrada)} />

                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setAltura (entrada)}/> 
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => Calcular ()} >
            <Text style={styles.botaoText}> Calcular IMC </Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

           

        </View>
        
        

    );
}

