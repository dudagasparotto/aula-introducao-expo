import {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from  './styles.js'


export default function Atividade3(){

    const [numero, setNumero] = useState(0);

    function handleincrementar(){
        setNumero(numero +1);
        console.log(numero);
    }

    function handleincrementar2(){
        //alert('Alguém tocou no botão!')
        setNumero(numero -1);
        console.log(numero);
    }
  
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade3</Text>

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => handleincrementar ()}
            > 

                <Text styles = {styles.txtBotao}> + </Text>
            </TouchableOpacity>

             <TouchableOpacity 
                style={styles.botao}
                onPress={() => handleincrementar2 ()}
            > 

                <Text styles = {styles.txtBotao}> - </Text>
            </TouchableOpacity>

        </View>
    );
}

