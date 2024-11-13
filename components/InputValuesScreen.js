// components/InputValuesScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from './CustomButton';

const InputValuesScreen = ({ navigation }) => {
  const inputValues = {
    signal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fftMagnitude: [0.1, 0.2, 0.3, 0.4, 0.5],
    fftPhase: [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI],
    impulse: [1, 0, 0, 0, 0],
    frequencyResponseMagnitude: [1, 1.5, 2, 2.5, 3],
    frequencyResponsePhase: [0, Math.PI / 6, Math.PI / 3, Math.PI / 2, Math.PI],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Valores Inseridos para Processamento</Text>
      <Text style={styles.sectionTitle}>Sinal de Entrada:</Text>
      <Text style={styles.values}>{inputValues.signal.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Magnitude da FFT do Sinal:</Text>
      <Text style={styles.values}>{inputValues.fftMagnitude.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Fase da FFT do Sinal:</Text>
      <Text style={styles.values}>{inputValues.fftPhase.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Resposta ao Impulso do Canal:</Text>
      <Text style={styles.values}>{inputValues.impulse.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Magnitude da Resposta em Frequência do Canal:</Text>
      <Text style={styles.values}>{inputValues.frequencyResponseMagnitude.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Fase da Resposta em Frequência do Canal:</Text>
      <Text style={styles.values}>{inputValues.frequencyResponsePhase.join(', ')}</Text>

      <CustomButton title="Próximo" onPress={() => navigation.navigate('Sinal no Tempo')} />
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
  values: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
});

export default InputValuesScreen;
