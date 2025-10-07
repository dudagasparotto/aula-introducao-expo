import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        titulo:{
            fontSize: RFPercentage(5),  
            color: '#d785b5ff',
            fontWeight: 'bold', 
            margin: 10,
        },
        txtEntrada:{
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor:'#dd8eddff',
            height: 40,
            color: '#E53635',
            width: '40%',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,

        },
        txtSaida:{
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#dda9a9ff',

        },
        botao:{
            backgroundColor: 'deeppink',
            height:40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
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