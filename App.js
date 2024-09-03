import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [quilometragem, setQuilometragem] = useState('');
  const [litros, setLitros] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  
  const calcularMedia = () =>{
    const media = quilometragem / litros;
    const calculoClassificacao = media.toFixed(2);
    setResultado(calculoClassificacao); 

    if (calculoClassificacao > 12){
      setClassificacao('A');
    } else if (calculoClassificacao > 10){
      setClassificacao('B');
    } else if (calculoClassificacao > 8){
      setClassificacao('C');
    } else if (calculoClassificacao > 4){
      setClassificacao('D');
    } else {
      setClassificacao('E');
    }

  }

  return (
    <View style={styles.container}>
    <TextInput style={styles.input} placeholder="Digite a Quilometragem" keyboardType="numeric" value={quilometragem} onChangeText={text => setQuilometragem(text)}/>
    <TextInput style={styles.input} placeholder="Digite os Litros" keyboardType="numeric" value={litros} onChangeText={text => setLitros(text)}/>

    <View style={styles.botao}>
    <Button title="Calcular" onPress={calcularMedia}/>
    </View>
    
      <Text style={styles.resultado}>Média: {resultado}</Text>
      <Text style={styles.resultado}>Classificação: {classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20, 
  },
  botao: {
    marginTop: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
