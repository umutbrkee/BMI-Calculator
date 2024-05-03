import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMIResult = ({ route }) => {
  const { bmiValue } = route.params;

  let bmiCategory = '';
  let color = '';

  if (bmiValue < 18.5) {
    bmiCategory = 'Underweight';
    color = 'blue';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    bmiCategory = 'Normal';
    color = 'green';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    bmiCategory = 'Overweight';
    color = 'orange';
  } else {
    bmiCategory = 'Obese';
    color = 'red';
  }

  return (
    <View style={[styles.container, { backgroundColor: 'lightgray' }]}>
      <Text style={styles.bmiText}>Your BMI: {bmiValue}</Text>
      <Text style={styles.categoryText}>BMI Category: {bmiCategory}</Text>
      <Text style={styles.infoText}>BMI VALUES:</Text>
      <Text style={styles.infoText}>Underweight: less than 18.5</Text>
      <Text style={styles.infoText}>Normal: between 18.5 and 24.9</Text>
      <Text style={styles.infoText}>Overweight: between 25 and 29.9</Text>
      <Text style={styles.infoText}>Obese: 30 or greater</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bmiText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
});

export default BMIResult;
