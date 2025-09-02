import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#f0f',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 8,
        },
        titulo:{
            fontSize: RFValue(5),
            fontFamily: 'Arial',
            color:'#fff',
            fontWeight: 'bold',
            borderColor: 'deeppink',
            textAlign: 'center',
            width: '100%',
            borderWidth: 2,
            borderColor: '#ff0',
        },
        txt:{
            fontSize: RFPercentage(2.2),
        },
    }
);
export default styles;