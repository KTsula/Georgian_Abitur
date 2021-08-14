import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const InfoButton = ({InfoName, color, navigation, ButtonName, code}) => {
  
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: color,
        height: 120,
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 10}}
      onPress = {() => navigation.navigate('Info', {Header: {InfoName}, Color: {color}, Code: {code}})}
    >
        <Text style={styles.Text}>{ButtonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    Text: {
        flex:1,      
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white'
    }
});

export default InfoButton;