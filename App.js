import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import constants from 'expo-constants';

import Exemplo06 from './src/exemplos/ex06';
import Exemplo08 from './src/exemplos/ex08';


//import Atividade05 from './src/atividades/atividade5';
//import Exemplo05 from './src/exemplos/exemplo05';

export default function App() {
  return (
    <View style={styles.container}> 
    <Exemplo08 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
