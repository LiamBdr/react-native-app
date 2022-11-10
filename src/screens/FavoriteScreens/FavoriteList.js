import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Text } from 'react-native';

const FavoriteList = () => {

    return (
        <SafeAreaView>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Favorite view</Text>
        </SafeAreaView>
    );
}

export default FavoriteList