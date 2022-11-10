import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {

    const [data, setData] = useState();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=' + offset)
            .then(response => {
                setData(response.data);
                setOffset(offset + 10);
            })
            .catch(error => {
                console.log(error);
            });
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
                keyExtractor={item => item.char_id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.4}
                onEndReached={() => {
                    if(offset < 70) {
                        axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=' + offset)
                            .then(response => {
                                setData(data.concat(response.data));
                                setOffset(offset + 10);
                            })
                    }
                }}
            />
        </SafeAreaView>
    );
}

export default CharacterList