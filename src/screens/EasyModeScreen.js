// screens/EasyModeScreen.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import EasyMode from '../components/EasyMode';

const EasyModeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <EasyMode />
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

export default EasyModeScreen;