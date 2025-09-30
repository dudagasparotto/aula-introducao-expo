import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: RFPercentage(3),
    color: 'deepskyblue',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'deepskyblue',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    height: 80,
    textAlign: 'center', // Centraliza horizontalmente
    textAlignVertical: 'center',
    borderRadius: 20,
  }, 
  input: {
    borderWidth: 1,
    borderColor: 'deepskyblue',
    width: '90%',
    height: 100,
    padding : 10,
},
 txtBotao: {
    color: 'pink',
    fontSize: RFPercentage(2),
    borderRadius: 20,
    marginTop: 30,
  }, 
  botao: {
    backgroundColor: 'darkslateblue',
    with: '75%',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center', 
    margin: RFPercentage(2),
  }, 
  botao: {
    flexDirection: 'row',
    backgroundColor: 'deepskyblue', 
    borderRadius: 20,
    padding: 10,  
    alignItems: 'center',
    marginTop: 10,
  },  
  txtBotao: {
    color: 'pink',
    fontSize: RFPercentage(2),
    borderRadius: 20,
    marginTop: 7,

}, 
txtSaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
},
txtEntrada: {
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 17,
    borderColor: '#E91E63',
    height: 50,
    color: '#E53935',
    borderRadius: 10,
    marginTop: 30,
},
button: {
    backgroundColor: '#E91E63',
    height: 40,
    borderRadius: 10,
    marginTop: 20,
},
textButton: {
    fontSize: 22,
    color: '#FF80AB',
    textAlign: 'center',
},
textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C51162',
},
});

export default styles;
