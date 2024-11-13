// utils/signalProcessing.js

import FFT from 'fft.js';

export const computeFFT = (signal) => {
  const fft = new FFT(signal.length);
  const output = fft.createComplexArray();
  fft.realTransform(output, signal);
  fft.completeSpectrum(output);
  return output;
};

export const computeMagnitudeAndPhase = (fftOutput) => {
  const magnitude = [];
  const phase = [];
  for (let i = 0; i < fftOutput.length / 2; i++) {
    const real = fftOutput[2 * i];
    const imag = fftOutput[2 * i + 1];
    magnitude.push(Math.sqrt(real ** 2 + imag ** 2));
    phase.push(Math.atan2(imag, real));
  }
  return { magnitude, phase };
};

export const impulseResponse = (length) => {
  // Simulação de uma resposta ao impulso básica (pode ser ajustada para um sistema específico)
  const impulse = Array(length).fill(0);
  impulse[0] = 1;  // Impulso em t=0
  return impulse;
};
