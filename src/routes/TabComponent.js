import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterList from '../screens/CharacterScreens/CharacterList';
import FavoriteList from '../screens/FavoriteScreens/FavoriteList';

const TabComponent = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Liste"
            screenOptions={{
                headerMode: 'screen',
                headerTitle : 'Breaking Bad',
            }}
            
        >
            <Tab.Screen name="Liste" component={CharacterList} options={{
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: size, height: size }}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png',
                            }}
                        />
                    );
                },
            }} />
            <Tab.Screen name="Favoris" component={FavoriteList}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: size, height: size }}
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzL4MUBJZmrRYt_3TO3Ta3dRNudHunq4N9L4NsDBsH&s',
                                }}
                            />
                        );
                    },
                }} />
        </Tab.Navigator>
    );
}

export default TabComponent