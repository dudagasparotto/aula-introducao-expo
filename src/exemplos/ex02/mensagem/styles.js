import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            //flex: 1,
            backgroundColor: 'deeppink',
            borderWidth: RFPercentage(0.6),
            borderColor: '#fff',
            borderRadius: 20,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 8,
        },
        titulo:{
            fintSize: RFPercentage(3),
            color:'#000000ff',
            fontWeight: 'bold',
    
            //borderWidth: 2,
           // padding: 8,
            //textAlign: 'center',
           // width: '100%',
            marginBottom: RFPercentage(2),
            marginTop: 10,
        },
        texto:{
            fontSize: RFPercentage(2.2),
            color: '#fafafa',
        },
    }
);
export default styles;