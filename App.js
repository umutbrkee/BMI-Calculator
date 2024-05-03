// App.js
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BMICalculator from './BMICalculator';
import BMIResult from './BMIResult';

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BMICalculator">
          <Stack.Screen name="BMICalculator" component={BMICalculator} options={{ title: 'BMI Calculator' }} />
          <Stack.Screen name="BMIResult" component={BMIResult} options={{ title: 'BMI Result' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
