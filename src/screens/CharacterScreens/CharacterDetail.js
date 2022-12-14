import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
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
                    <Button title="Ajouter aux favoris" onPress={addFavorite} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

styles = StyleSheet.create({
    image: {
        width: '80%',
        height: 400,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        margin: 10,
    }
});

export default CharacterDetail;