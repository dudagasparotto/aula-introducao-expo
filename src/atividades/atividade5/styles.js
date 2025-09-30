import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        txtEntrada:{
            borderWidth: 4,
            textAlign: 'center',
            fontSize: RFPercentage(2.5),
            borderColor:'#dd8eddff',
            height: 40,
            //width: '80%',
            padding: 10,
            margin: 10,
            marginBottom: RFPercentage(5),
            backgroundColor: '#fff',
            borderRadius: RFPercentage(1.5),
        },
        txtSaida:{
            margin: RFPercentage(2),
            fontSize: RFPercentage(2.5),
            fontWeight: 'bold',
            textAlign: 'center',
        },
        botao:{
            backgroundColor: 'deeppink',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),   
            height: RFPercentage(6),
            width: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: RFPercentage(2),
        },
        txtBotao:{
          fontSize: RFPercentage(2.5),
          color: '#fff',    
          textAlign: 'center',
        },
        txtLabel:{
            fontStyle: 'italic',
            fontSize: RFPercentage(2),
            marginTop: 10,
            color: '#fff',
            fontSize: RFPercentage(2.5),
        }
    }
);
export default styles;