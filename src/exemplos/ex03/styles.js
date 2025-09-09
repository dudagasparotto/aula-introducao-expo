import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#fae2faff',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 8,
        },
       titulo:{
            fintSize: RFValue(5),
            color:'#777',
            fontWeight: 'bold',
            borderColor: 'deeppink',
            borderWidth: 2,
            padding: 8,
            textAlign: 'center',
            width: '100%',
            marginBottom: 10,
            marginTop: 10,
        },
        txt:{
            //fontSize: RFPercentage(2.2),
        },
        botao:{
            backgroundColor: 'deeppink',
            width: '60%',
            padding:RFPercentage(1) ,
            borderRadius:RFPercentage (20),
        },
        txtBotao:{
            color: '#fff',
            fontSize: RFPercentage(2),
            textAlign: 'center',
          
        },
    }
);
export default styles;