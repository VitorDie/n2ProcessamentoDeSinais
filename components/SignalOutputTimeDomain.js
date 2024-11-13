// components/SignalOutputTimeDomain.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomButton from './CustomButton';

const SignalOutputTimeDomain = ({ navigation }) => {
  const signalOutputTimeDomain = [1, 0.9, 0.7, 0.5, 0.3]; // Sinal de saída no domínio do tempo

  const chartData = {
    labels: ['0', '1', '2', '3', '4'],
    datasets: [
      {
        data: signalOutputTimeDomain,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sinal de Saída no Domínio do Tempo</Text>

      <LineChart
        data={chartData}
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

      <CustomButton title="Próximo" onPress={() => navigation.navigate('Final')} />
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
});

export default SignalOutputTimeDomain;
