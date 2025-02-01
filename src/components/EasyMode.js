import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Keyboard } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';


const EasyMode = () => {
  const [score, setScore] = useState(0);
  const [num1, setNumber1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNumber2] = useState(Math.floor(Math.random() * 10));
  const [solution, setSolution] = useState(0);
  const [userSolution, setUserSolution] = useState('');
  const [calcul, setCalcul] = useState('');
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    nextCalcul();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const generateNumber = () => {
    setNumber1(Math.floor(Math.random() * 10));
    setNumber2(Math.floor(Math.random() * 10));
    return [num1, num2];
  };

  const determineTypeOfCalcul = () => {
    return Math.random() < 0.5 ? '+' : '-';
  };

  const makeCalcul = (num1, num2, operator) => {
    setCalcul(`${num1} ${operator} ${num2}`);
    setSolution(operator === '+' ? num1 + num2 : num1 - num2);
  };

  const updateScore = () => {
    if (startTime) {
      const timeTaken = 10 - timeLeft;
      const penalty = Math.min(timeTaken * 5, 50);
      setScore((prevScore) => Math.max(prevScore - penalty, 0));
    }
  };

  const compareSolutions = () => {
    if (parseInt(userSolution) === solution) {
      setScore((prev) => prev + 100);
      setMessage("Bonne réponse !");
    } else {
      setMessage(`Mauvaise réponse ! La solution était ${solution}`);
    }
  };

  const handleAnswer = () => {
    Keyboard.dismiss();
    
    compareSolutions();
    updateScore();
    nextCalcul();
    setUserSolution('');
  };

  const handleTimeout = () => {
    setMessage("⏳ Temps écoulé, prochain calcul !");
    setScore((prevScore) => Math.max(prevScore - 50, 0));
    nextCalcul();
  };

  const nextCalcul = () => {
    const [num1, num2] = generateNumber();
    const operator = determineTypeOfCalcul();
    makeCalcul(num1, num2, operator);
    setTimeLeft(10);
    setStartTime(Date.now());
  };

  const toggleMinusSign = () => {
    setUserSolution(current =>
      current.startsWith('-')
        ? current.slice(1)  // Retire le signe moins
        : `-${current}`     // Ajoute le signe moins
    );
  };

  const handleMinusToggle = () => {
    // Masquer le clavier si actif
    Keyboard.dismiss();

    setUserSolution(current => 
      current.startsWith('-') 
        ? current.slice(1)  // Retire le signe moins
        : `-${current}`     // Ajoute le signe moins
    );
    
    // Forcer le focus sur l'input
    inputRef.current.focus();
  };

  

  const timerStyle = {
    color: timeLeft <= 3 ? 'red' : 'black',
    fontWeight: timeLeft <= 3 ? 'bold' : 'normal'
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <Text
            style={[
              styles.timerText,
              {
                color: timeLeft <= 3 ? 'red' : 'black',
                fontWeight: timeLeft <= 3 ? 'bold' : 'normal'
              }
            ]}
            >
            ⏳ Temps restant: {timeLeft}s
          </Text>
          <Text style={styles.problemText}>{calcul}</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.buttonMinus} onPress={toggleMinusSign}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userSolution}
              onChangeText={setUserSolution}
              returnKeyType="done"
              onSubmitEditing={handleAnswer}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleAnswer}>
            <Text style={styles.buttonText}>Répondre</Text>
          </TouchableOpacity>
          {message && <Text style={styles.messageText}>{message}</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  problemText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row', // Aligns Button and TextInput horizontally
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10, // Adds space between the button and input
    marginBottom: 10,
  },
  buttonMinus: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  messageText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default EasyMode;
