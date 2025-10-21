import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {

    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fcd6edff',
    padding: 90,
    },

    paragraph: {
    margin: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#c9395dff',
    },

    entradaIMC:{
    flex: 1,
    flexDirection: 'row',
    },

    input:{
    height: 80,
    textAlign: 'center',
    whidth: '50%',
    fontSize: 50,
    marginTop: 24,
    color: '#862e62ff',
    },

    botao :{
    backgroundColor: 'deeppink',
    borderRadius: RFPercentage(2),
    //padding: RFPercentage(1),
    },

    botaoText:{
        alingSelf : 'center',
        padding: 20,
        fontSize: 25,
        color: '#611341ff',
        fontWeight: 'bold',
    },

    resultados:{
        alingSelf: 'center',
        color: 'lightgray',
        fontSize: 65,
        padding: 15,
    },

    }
);
export default styles;