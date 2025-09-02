import {View, Text} from 'react-native';

import styles from  './styles.js'

 function mensagem({titulo, children}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{children}</Text>
        </View>
    );
}

export default mensagem;