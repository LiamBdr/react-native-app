import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CharacterDetail = ({ navigation, route }) => {

    const item = route.params.item;

    console.log(item);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.text}>Genre : {item.gender}</Text>
                    <Text style={styles.text}>Localisation : {item.location.name}</Text>
                    <Text style={styles.text}>Espèce : {item.species}</Text>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Button title="Ajouter aux favoris" onPress={() => {}} />
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