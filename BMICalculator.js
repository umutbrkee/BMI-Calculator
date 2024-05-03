import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BMICalculator = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  useEffect(() => {
    // Calculate BMI whenever weight or height changes
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height);

    if (!isNaN(weightInKg) && !isNaN(heightInM) && heightInM !== 0) {
      const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(1);
      setBMI(bmiValue);
    } else {
      setBMI('');
    }
  }, [weight, height]);

  const calculateBMI = () => {
    navigation.navigate('BMIResult', { bmiValue: bmi });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your weight (in kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex:70"
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Enter your height (in meters):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex:1.85"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />

      <Button
        title="Calculate BMI"
        onPress={calculateBMI}
        style={styles.calculateButton}
      />

      {bmi !== '' && <Text style={styles.bmiText}>Your BMI: {bmi}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'blue',
  },
  input: {
    width: '50%',
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
  calculateButton: {
    marginTop: 20,
  },
  bmiText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default BMICalculator;
