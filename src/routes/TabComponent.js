import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterList from '../screens/CharacterScreens/CharacterList';

const TabComponent = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={CharacterList} options={{
                        title: 'List',
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={{
                                        uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png',
                                    }}
                                />
                            );
                        },
                    }} />
        </Tab.Navigator>
      );
}

export default TabComponent