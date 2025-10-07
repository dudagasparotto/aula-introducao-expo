import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Exemplo5 from './src/atividades/atividade5';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade5 />
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
