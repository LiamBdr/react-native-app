import {
    Text,
    Image,
    View,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const FavoriteCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => removeFavorite(item.id)}>
                <Text style={styles.buttonText}>Supprimer</Text>
            </TouchableOpacity>
        </View>
    );
}

const removeFavorite = (id) => {
    AsyncStorage.getItem('favoris').then((value) => {
        if (value !== null) {
            let favoris = JSON.parse(value);
            let newFavoris = favoris.filter((item) => item.id !== id);
            AsyncStorage.setItem('favoris', JSON.stringify(newFavoris));
        }
    });
}

const styles = StyleSheet.create({
    card: {
        display: 'inline-flex',
        height: 270,
        width: '50%',
        flex: 1,
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderColor: 'rgb(50,95,55)',
        borderStyle: 'solid',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '65%',
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
        margin: 5,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 8,
        margin: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default FavoriteCard