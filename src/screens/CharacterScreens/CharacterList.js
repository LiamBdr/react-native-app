import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = ({ navigation }) => {

    const [data, setData] = useState();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setData(response.data.results);
                setOffset(response.data.info.next)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const renderItem = useCallback(({ item }) => {
        return (
            <CharacterCard item={item} navigation={navigation} />
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
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (offset) {
                        axios.get(offset)
                            .then(response => {
                                setData([...data, ...response.data.results]);
                                setOffset(response.data.info.next)
                            })
                    }
                }}
            />
        </SafeAreaView>
    );
}

export default CharacterList