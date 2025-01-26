import React, {useState} from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";


const EasyMode = () => {

    return (
        <TouchableOpacity onPress={openEasyMode}>
            <Text>EasyMode</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });