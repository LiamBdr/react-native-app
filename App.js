import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabComponent from './src/routes/TabComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/*(...) */}
        <TabComponent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}