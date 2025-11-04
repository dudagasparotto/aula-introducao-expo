import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#ff0',
            alignItems: 'center',
           borderRadius: RFPercentage(2),
            padding: RFPercentage (1),
        },
        titulo:{
            fintSize: RFPercentage(3),
            color:'#777',
            fontWeight: 'bold',
            borderColor: 'deeppink',
            borderWidth: 2,
            padding: 8,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '100%',
            marginBottom: 10,
            marginTop: 10,
            borderRadius:20,
        },
        cabecalho:{
            backgroundColor: 'deeppink',
            width: '100%',
            padding: RFPercentage(2),
            alignItems: 'center',
            color: '#fff',
            fontSize: RFValue(20),
            textAlign: 'center',
        },
        lista:{
            marginTop: RFValue(10),
            width: '100%',
        },
    }
);
export default styles;