// components/FrequencyResponse.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomButton from './CustomButton';

const FrequencyResponse = ({ navigation }) => {
  const frequencyResponseMagnitude = [1, 1.5, 2, 2.5, 3]; // Magnitude da resposta em frequência
  const frequencyResponsePhase = [0, Math.PI / 6, Math.PI / 3, Math.PI / 2, Math.PI]; // Fase da resposta em frequência

  const chartDataMagnitude = {
    labels: ['0Hz', '1Hz', '2Hz', '3Hz', '4Hz'],
    datasets: [
      {
        data: frequencyResponseMagnitude,
        strokeWidth: 2,
      },
    ],
  };

  const chartDataPhase = {
    labels: ['0Hz', '1Hz', '2Hz', '3Hz', '4Hz'],
    datasets: [
      {
        data: frequencyResponsePhase.map(phase => phase * (180 / Math.PI)), // Converte para graus
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resposta em Frequência do Canal</Text>

      <Text style={styles.sectionTitle}>Magnitude da Resposta em Frequência:</Text>
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

      <Text style={styles.sectionTitle}>Fase da Resposta em Frequência:</Text>
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

      <CustomButton title="Próximo" onPress={() => navigation.navigate('Espectro do Sinal de Saída')} />
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

export default FrequencyResponse;
