import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('EasyMode')}
        style={{
          padding: 10,
          backgroundColor: '#4CAF50',
          borderRadius: 5,
          margin: 10
        }}
      >
        <Text>EasyMode</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('HardMode')}
        style={{
          padding: 10,
          backgroundColor: '#f44336',
          borderRadius: 5,
          margin: 10
        }}
      >
        <Text>HardMode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;