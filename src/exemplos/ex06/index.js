import React, {useState} from 'react'; 
import  {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 


export default function Exemplo06 (){
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 6</Text>
            <View style={styles.entradaImc}>
            <TextInput 
            placeholder='Massa' 
            placeholderTextColor='lightgray' 
            keyboardType='numeric' 
            style={styles.input} />
        <TextInput 
        placeholder='Altura' 
        placeholderTextColor='lightgray' 
        keyboardType='numeric' 
        style={styles.input} />
  </View>
</View>

    );
}
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    },
    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    },
    entradaIMC:{
        flex: 1,
        flexDirection: 'row',
    },
});
