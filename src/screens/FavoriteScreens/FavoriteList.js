import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import FavoriteCard from './FavoriteCard';

const FavoriteList = () => {

    const [favoris, setFavoris] = useState();

    useEffect(() => {
        AsyncStorage.getItem('favoris').then((value) => {
            if (value !== null) {
                setFavoris(JSON.parse(value));
            }
        });
    });

    const renderItem = useCallback(({ item }) => {
        return (
            <FavoriteCard item={item} />
        );
    });


    return (
        <SafeAreaView>
            {favoris && favoris.length === 0 && <Text style={styles.text}>Aucun favoris 😔</Text>}
            <FlatList
                data={favoris}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        margin: 10,
        marginTop: 50,
        textAlign: 'center',
        margin: 'auto',
    },
});

export default FavoriteList