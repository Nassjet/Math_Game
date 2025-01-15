import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 100)); // Nombre aléatoire entre 0 et 100
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
  const [userAnswer, setUserAnswer] = useState()
  const [res, setResult] = useState(0)
  const [msg, setMsg] = useState("")


  const additionne = () => {
    setResult(number1 + number2)
  }
  useEffect(() => {
    setResult(() => {number1 + number2})
  }, {number1, number2})

  const handleSubmit = () => {
    additionne();
    if (userAnswer == res) {
      setMsg("Bonne réponse")
    }
    else {
      setMsg("Mauvaise réponse, la réponse était " + res)
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Résultat : {number1} + {number2} = {res}</Text>

      <TextInput placeholder='Entre ta réponse:' keyboardType='numeric' onChangeText={setUserAnswer}></TextInput>

      <Button title='Submit' onPress={handleSubmit}></Button>
      <Text>{msg}</Text>
      <StatusBar style="auto" />
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
  text: {
    color: '#000',
    fontSize: 18,
    marginBottom: 10,
  },
});
