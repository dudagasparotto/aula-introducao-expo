import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#ff0',
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
            fontSize: RFPercentage(2.2),
        },
    }
);
export default styles;