// components/SignalOutput.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomButton from './CustomButton';

const SignalOutput = ({ navigation }) => {
  const outputSignalMagnitude = [0.5, 0.6, 0.7, 0.8, 0.9]; // Magnitude do sinal de saída
  const outputSignalPhase = [0, Math.PI / 8, Math.PI / 4, Math.PI / 2, Math.PI]; // Fase do sinal de saída

  const chartDataMagnitude = {
    labels: ['0Hz', '1Hz', '2Hz', '3Hz', '4Hz'],
    datasets: [
      {
        data: outputSignalMagnitude,
        strokeWidth: 2,
      },
    ],
  };

  const chartDataPhase = {
    labels: ['0Hz', '1Hz', '2Hz', '3Hz', '4Hz'],
    datasets: [
      {
        data: outputSignalPhase.map(phase => phase * (180 / Math.PI)), // Converte para graus
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Espectro do Sinal de Saída</Text>

      <Text style={styles.sectionTitle}>Magnitude do Sinal de Saída:</Text>
      <LineChart
        data={chartDataMagnitude}
        width={Dimensions.get('window').width - 30}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />

      <Text style={styles.sectionTitle}>Fase do Sinal de Saída:</Text>
      <LineChart
        data={chartDataPhase}
        width={Dimensions.get('window').width - 30}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />

      <CustomButton title="Próximo" onPress={() => navigation.navigate('Sinal de Saída no Tempo')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
});

export default SignalOutput;
