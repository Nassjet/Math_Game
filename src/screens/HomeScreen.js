import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/HomeScreen.styles';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.button, styles.easyButton]}
                onPress={() => navigation.navigate('EasyMode')}
            >
                <Text style={styles.buttonText}>Mode Facile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, styles.hardButton]}
                onPress={() => navigation.navigate('HardMode')}
            >
                <Text style={styles.buttonText}>Mode Difficile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;