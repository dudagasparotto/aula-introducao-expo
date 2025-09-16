import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import Exemplo01 from './src/exemplos/ex01';
//import Atividade1 from './src/atividades/atividade1';

//import Exemplo03 from './src/exemplos/ex03';
//import Atividade3 from './src/atividades/atividade3';

import Exemplo04 from './src/exemplos/ex04';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04/>
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
