import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {

    const [data, setData] = useState();
    const [pagination, setPagination] = useState(0);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setData(response.data.results);
                setPagination(response.data.info.next);
            })
    }, []);

    const renderItem = useCallback(({ item }) => {
        return (
            <CharacterCard item={item} />
        );
    });

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                extraData={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    if (pagination) {
                        axios.get(pagination)
                            .then(response => {
                                setData([...data, ...response.data.results]);
                                setPagination(response.data.info.next);
                            })
                    }
                }}
            />
        </SafeAreaView>
    );
}

export default CharacterList