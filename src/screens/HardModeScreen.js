// screens/HardModeScreen.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import HardMode from '../components/HardMode';

const HardModeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <HardMode />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
});

export default HardModeScreen;