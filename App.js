import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import Exemplo01 from './src/exemplos/ex01';
//import Atividade1 from './src/atividade1';


import Exemplo02 from './src/exemplos/ex02';



export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:8,
    
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
