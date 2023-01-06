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
            <Text style={styles.title}>Mes favoris</Text>            
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        textAlign: 'center',      
        textTransform: 'uppercase',
    }
});

export default FavoriteList