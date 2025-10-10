import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Exemplo04 from './src/exemplos/ex04';


import Atividade05 from './src/atividades/atividade5';
import Exemplo05 from './src/exemplos/exemplo05';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04 />
      <StatusBar style="light" />
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
