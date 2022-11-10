import {
    Text,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';
import React from 'react';

const CharacterCard = ({ item }) => {

    return (
        <Pressable style={styles.card} >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'inline-flex',
        height: 200,
        flex: 1,
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderRadius: 10,
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        textAlign: 'center',
    },
});

export default CharacterCard