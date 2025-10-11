import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor:'#e9d9e9ff',
            alignItems: 'center',
        },
        titulo:{
            fintSize: RFPercentage(5),
            color:'#777',
            fontWeight: 'bold',
            margin: 10,
            marginBottom: RFPercentage(5),
            marginTop: RFPercentage(5),

          
        },
        txt:{
            fontSize: RFPercentage(2.5),
        },
        input: {
            borderWidth: RFPercentage(0.5),
            borderColor:'#dd8eddff',
            width: '80%',
            padding: RFPercentage(1),
            height: RFPercentage(6),
            //fontSize: RFPercentage(2),
            //textAlign: 'center',
            borderRadius: RFPercentage(1.5),
            //backgroundColor: '#fff',
        },
        botao:{
            backgroundColor: 'deeppink',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),
            alignItems: 'center',
            marginTop: RFPercentage(2),
            width: '40%',
            height: RFPercentage(6),
        },
        txtBotao:{
            color: '#fff',
            fontSize: RFPercentage(2.5),
        }
    }
);
export default styles;