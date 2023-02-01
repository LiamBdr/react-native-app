import React, { useState, useEffect } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        getFavoritesCount();
        getUserInfo();
    }, []);

    const getFavoritesCount = async () => {
        try {
            const value = await AsyncStorage.getItem('favoris');
            if (value !== null) {
                const array = JSON.parse(value);
                setFavoritesCount(array.length);
            }
        } catch (e) {
            console.warn(e);
        }
    };

    const getUserInfo = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            const user = JSON.parse(value);
            setName(user.name);
            setAge(user.age);
            setLocation(user.location);
          }
        } catch (e) {
          console.warn(e);
        }
      };
    
      const saveChanges = async () => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify({
            name,
            age,
            location,
          }));
        } catch (e) {
          console.warn(e);
        }
      };

    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{
                    uri: 'https://i.pinimg.com/originals/99/3a/ff/993aff69b6c079200f0f1120ced97113.jpg',
                }}
            />
            <View style={styles.likesContainer}>
                <Text style={styles.likesText}>
                    {favoritesCount}
                </Text>
                <SimpleLineIcons name="heart" size={20} color="red" />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nom:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Text style={[styles.infoText, { marginTop: 20 }]}>Age:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={text => setAge(text)}
                    keyboardType="number-pad"
                />
                <Text style={[styles.infoText, { marginTop: 20 }]}>Localisation:</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={text => setLocation(text)}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                <Text style={styles.saveButtonText}>Enregistrer les modifications</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    likesText: {
        fontSize: 16,
        marginRight: 5,
    },
    heartIcon: {
        width: 20,
        height: 20,
    },
    infoContainer: {
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
};


export default Profile;
