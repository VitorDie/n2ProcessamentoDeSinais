import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignalInputTimeDomain from './components/SignalInputTimeDomain';
import SignalSpectrum from './components/SignalSpectrum';
import ImpulseResponse from './components/ImpulseResponse';
import FrequencyResponse from './components/FrequencyResponse';
import SignalOutput from './components/SignalOutput';
import SignalOutputTimeDomain from './components/SignalOutputTimeDomain';
import InputValuesScreen from './components/InputValuesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Valores de Entrada">
        <Stack.Screen name="Valores de Entrada" component={InputValuesScreen} />
        <Stack.Screen name="Sinal no Tempo" component={SignalInputTimeDomain} />
        <Stack.Screen name="Espectro do Sinal" component={SignalSpectrum} />
        <Stack.Screen name="Resposta ao Impulso" component={ImpulseResponse} />
        <Stack.Screen name="Resposta em Frequência" component={FrequencyResponse} />
        <Stack.Screen name="Espectro do Sinal de Saída" component={SignalOutput} />
        <Stack.Screen name="Sinal de Saída no Tempo" component={SignalOutputTimeDomain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
