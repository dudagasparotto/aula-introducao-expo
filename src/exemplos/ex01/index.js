import {View, Text} from 'react-native';

import styles from  './styles.js'

export default function Exemplo01(){
    return(
        <View style={styles.container}>
            <Text style={styles.container}>Exemplo 1</Text>
            <Text style={styles.container}>Introdução React Native com Export</Text>
        </View>
    );
}

