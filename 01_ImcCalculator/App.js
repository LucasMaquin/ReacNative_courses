import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc <= 18.5) {
      alert(`Magreza ${imc.toFixed(2)}`);
    } else if (imc >= 18.6 && imc < 25) {
      alert(`Peso normal ${imc.toFixed(2)}`);
    } else if (imc >= 25 && imc < 30) {
      alert(`sobrepeso ${imc.toFixed(2)}`);
    } else if (imc >= 30 && imc < 35) {
      alert(`Obesidade de grau I ${imc.toFixed(2)}`);
    } else if (imc >= 35 && imc < 40) {
      alert(`Obesidade de grau II ${imc.toFixed(2)}`);
    } else if (imc >= 40) {
      alert(`Obesidade de grau III ${imc.toFixed(2)}`);
    }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        keyboardType="numeric"
        placeholder="Peso (kg)"
        placeholderTextColor= "#fff"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        keyboardType="numeric"
        placeholder="Altura (cm)"
        placeholderTextColor="#fff"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
  },

  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23,
    color: '#fff',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10
  },

  buttonText: {
    color: '#fff',
    fontSize: 25,
  },

});