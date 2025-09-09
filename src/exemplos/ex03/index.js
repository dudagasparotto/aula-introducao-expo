import {useState} from 'react';

import {View, Text, Button, TouchableOpacity} from 'react-native';

import styles from  './styles.js'


export default function Exemplo03(){

    const [numero, setNumero] = useState(0);

    function handleincrementar(){
        setNumero(numero +1);
        //console.log(numero);
    }

    function handleincrementar2(){
        alert('Alguém tocou no botão!')
        setNumero(numero +1);
        //console.log(numero);
    }
  
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Button
                onPress={ () => {alert('Alguém tocou no botão!')} }
                title='Alerta'
                color='#841584'
                accessibilityLabel='Botão de alerta'
            />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => handleincrementar2 ()}
            > 

                <Text styles = {styles.txtBotao}> Incrementar número </Text>
            </TouchableOpacity>

        </View>
    );
}

