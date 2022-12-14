import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
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
        <FlatList
            data={favoris}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
    );
}

export default FavoriteList