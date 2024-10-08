import React, {
    useEffect, 
    useState
} from 'react';

import { 
    Text, 
    View, 
    StyleSheet, 
    Image,
    FlatList,
    Pressable
} from 'react-native';
import IconPlus from '../assets/plus';
import IconMinus from '../assets/minus';

export default function Elementos({ item, cantidad, setCantidad }) {

    const [cantidadIndividual, setCantidadIndividual] = useState(cantidad[item.id - 1]);


    useEffect(() => {
        const nuevasCantidades = cantidad.slice();
        if (nuevasCantidades[item.id - 1] != cantidadIndividual) {
            nuevasCantidades[item.id - 1] = cantidadIndividual; // Solo actualiza si es necesario
            setCantidad(nuevasCantidades); // Actualiza el estado global
        }
    }, [cantidadIndividual, item.id, setCantidad]);


    return(
        <View style={styles.elementos}>
            <View style={styles.contTitulo}>
                <Text style={styles.titulo}>{item.name}</Text>
            </View>
            <View style={styles.informacion}>
                <Image
                style={styles.image}
                source={{ uri: item.image }}
                />
                <Text style={styles.precio}>${item.price}</Text>
                <Pressable 
                onPress={() => setCantidadIndividual(cantidadIndividual + 1)}
                style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#ecf0f1',
                },
                styles.buttonsCantidad,
                ]} >
                <IconPlus />
                </Pressable>

                <Text style={styles.cantidad}>{cantidadIndividual}</Text>

                <Pressable 
                onPress={() => {
                    cantidadIndividual > 0 &&
                    setCantidadIndividual(cantidadIndividual - 1)
                }}
                style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#ecf0f1',
                },
                styles.buttonsCantidad,
                ]} >
                <IconMinus />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    elementos: {
        flexDirection: 'column',
        marginHorizontal: 0,
        marginBottom: 20,
    },
    flatList: {
        width: '100%',
        marginBottom: 10,
        marginHorizontal: 0,
    },
    contTitulo: {
        marginBottom: 5,
    },
    titulo: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    informacion: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        height: 128,
        width: 170,
        borderRadius: 10,
    },
    precio: {
        fontSize: 16,
        marginEnd: 10,
    },
    buttonsCantidad: {
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 50,
    },
    cantidad: {
        fontSize: 20,
    },
});