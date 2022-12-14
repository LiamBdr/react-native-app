import {
    Text,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';
import React from 'react';


const CharacterCard = ({item, navigation}) => {
    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate('CharacterDetail', {item:item})}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'inline-flex',
        height: 270,
        flex: 1,
        backgroundColor: 'white',
        shadowOpacity: 0.1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth : 2,
        borderColor: 'rgb(50,95,55)',
        borderStyle: 'solid',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '82%',
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        textAlign: 'center',
    }
});

export default CharacterCard