import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CharacterDetail = ({ navigation, route }) => {

    const item = route.params.item;

    const addFavorite = async () => {
        try {
            const value = await AsyncStorage.getItem('favoris');
            if (value !== null) {
                const array = JSON.parse(value);
                if (array.some(e => e.id === item.id)) {
                    console.log(item.name + ' already exists in array');
                    return;
                }
                array.push(item);
                await AsyncStorage.setItem('favoris', JSON.stringify(array));
                console.log(item.name + ' added to existing array');
            } else {
                await AsyncStorage.setItem('favoris', JSON.stringify([item]))
                console.log(item.name + ' added to new array');
            }
        } catch (e) {
            console.warn(e);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.text}>Genre : {item.gender}</Text>
                    <Text style={styles.text}>Localisation : {item.location.name}</Text>
                    <Text style={styles.text}>Espèce : {item.species}</Text>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <TouchableOpacity style={styles.button} onPress={addFavorite}>
                        <Text style={styles.buttonText}>Ajouter aux favoris</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

styles = StyleSheet.create({
    image: {
        width: '80%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'rgb(50,95,55)',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        margin: 3,
    },
    button: {
        backgroundColor: 'rgb(50,95,55)',
        borderRadius: 5,
        padding: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15,
        width: '50%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});

export default CharacterDetail;