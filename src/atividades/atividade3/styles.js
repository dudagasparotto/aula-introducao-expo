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
            fintSize: RFValue(10),
            color:'#777',
            fontWeight: 'verdana',
            borderColor: 'deeppink',
            borderWidth: 2,
            padding: 8,
            textAlign: 'center',
            width: '100%',
            marginBottom: 10,
            marginTop: 10,
        },
        txt:{
            fontSize: RFPercentage(6), 
        },
        botao:{
            backgroundColor: 'deeppink',
            width: '40%',
            height: '7%',
            //height: RFPercentage(6),
            padding:RFPercentage(1) ,
            borderRadius:RFPercentage (10),
           // flexDirection: 'row',
            alignItems: 'center',
        },
       txtBotao:{
            color: '#fff',
            fontSize: RFPercentage(10),
            //textAlign: 'center',
            
          
        },
    }
);
export default styles;