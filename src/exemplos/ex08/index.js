import {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import ItemLista from './itemLista/';

import styles from  './styles.js'

export default function Exemplo08(){

    const [itens, setItens] = useState([
        {id: uuid.v4(), text: 'Leite integral'},
        {id: uuid.v4(), text: 'Pão de forma'},
        {id: uuid.v4(), text: 'Nescau'},
        {id: uuid.v4(), text: 'Manteiga'},   
    ]); // [] array ou lista de itens
   
    function deleteItem(id){
        setItens((prevItems) => {
            return prevItems.filter(item => item.id !== id);
        });
    }
        return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 8</Text>
            <Text sytle={style.cabcalho}>Lista de compras</Text>
            <FlatList
                data={items}
                renderItem={({item}) =>
                     <ItemLista id={item.id} deleteItem={deleteItem}>
                        {item.text}
                     </ItemLista>}

                style={styles.lista}     
            />
        </View>
        );
}

