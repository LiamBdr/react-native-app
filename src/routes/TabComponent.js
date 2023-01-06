import * as React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteList from '../screens/FavoriteScreens/FavoriteList';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import CharacterStack from '../screens/CharacterScreens/CharacterStack';

const TabComponent = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Liste"
            screenOptions={{
                headerMode: 'screen',
                headerTitle: () => (
                    <Image style={{ width: 80, height: '90%', resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../../assets/images/breaking-bad-logo.png')}
                    />
                ),
                headerStyle: {
                    backgroundColor: 'white',
                    borderBottomColor: 'rgb(50,95,55)',
                    borderBottomWidth: 2,
                    height: 100,
                },  
            }}
        >
            <Tab.Screen name="Liste" component={CharacterStack} 
                options={{
                tabBarIcon: ({ size, focused, color }) => <FontAwesome5 name="caravan" size={24} color={focused ? "#fcd303" : "#325f37"} />,
                tabBarLabel: ({focused}) => <Text style={{ fontSize: 12, fontWeight: 'bold', color: focused ? "black" : "#325f37" }}> Home </Text> ,
            }} />
            <Tab.Screen name="Favoris" component={FavoriteList}
                options={{
                    tabBarIcon: ({ size, focused, color }) => <SimpleLineIcons name="chemistry" size={24} color={focused ? "#fcd303" : "#325f37"} />,
                    tabBarLabel: ({focused}) => <Text style={{ fontSize: 12, fontWeight: 'bold', color: focused ? "black" : "#325f37" }}> Liste </Text> ,
                }}  />
            
        </Tab.Navigator>
    );
}

export default TabComponent