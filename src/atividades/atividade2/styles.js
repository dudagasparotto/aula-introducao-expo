import { StyleSheet } from "react-native";
import { RFPercentage} from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            //justifyContent: 'space-evenly',
            padding: 8,
            borderRadius: 20,
        },
        titulo:{
            fintSize: RFPercentage(3),
            color:'#deeppink',
            fontWeight: 'bold',
            borderColor: 'deeppink',
            borderWidth: 2,
            borderRadius: 20,
            padding: 8,
            textAlign: 'center',
            width: '100%',
            marginBottom: 10,
            marginTop: 10,
            height: 80,
            textAlignVertical: 'center',
            textAlign: 'center',
        },
        imagem:{
            width: '80%',
            resizeMode: 'contain',
        },
    }
);
export default styles;