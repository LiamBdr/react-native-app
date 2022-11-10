import {
    FlatList,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({ item }) => (
    <TouchableOpacity>
        <Text>{item.name}</Text>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
);

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

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
            />
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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