// components/ImpulseResponse.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import CustomButton from './CustomButton';

const ImpulseResponse = ({ navigation }) => {
  const impulse = [1, 0, 0, 0, 0]; // Resposta ao impulso do canal

  const chartData = {
    labels: ['0', '1', '2', '3', '4'], // Eixo do tempo
    datasets: [
      {
        data: impulse,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resposta ao Impulso do Canal</Text>

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

      <CustomButton title="Próximo" onPress={() => navigation.navigate('Resposta em Frequência')} />
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

export default ImpulseResponse;
