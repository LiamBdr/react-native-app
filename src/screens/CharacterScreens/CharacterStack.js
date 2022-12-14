import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const Stack = createStackNavigator();

const CharacterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CharacterList" component={CharacterList} options={{ headerShown: false }}  />
            <Stack.Screen name="CharacterDetail" component={CharacterDetail}
                options={{ headerShown: true, headerTitle : 'Détails du personnage', headerTitleStyle: { color: 'black', fontSize: 15, fontWeight: 'bold' }, headerTintColor: 'black' }}
            />
        </Stack.Navigator>
    );
}

export default CharacterStack;