import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const SearchList = ({ navigation }) => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchCharacters = async searchTerm => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
            setCharacters(response.data.results);
            setOffset(response.data.info.next)
        } catch (error) {
        }
    };

    useEffect(() => {
        fetchCharacters(searchTerm);
    }, [searchTerm]);

    const navigateToDetail = item => {
        navigation.navigate('CharacterDetail', { item });
    };

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={text => setSearchTerm(text)}
                    value={searchTerm}
                    placeholder="Rechercher un personnage"
                />
            </View>
            <FlatList
                data={characters}
                extraData={characters}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigateToDetail(item)}>
                        <View style={styles.characterContainer}>
                            <Image
                                style={styles.characterImage}
                                source={{ uri: item.image }}
                            />
                            <Text style={styles.characterName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (offset) {
                        axios.get(offset)
                            .then(response => {
                                setCharacters([...characters, ...response.data.results]);
                                setOffset(response.data.info.next)
                            })
                    }
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    characterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    characterImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    characterName: {
        fontSize: 16,
    },
});

export default SearchList;