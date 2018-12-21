import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, keyboardType, secureTextEntry, placeholder }) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput 
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCapitalize='none'
            />
        </View>
    );
}

export { Input };

const styles = StyleSheet.create({
    containerStyle: {
        height: 44,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 16,
        flex: 1,
        paddingLeft: 5,
    },
    inputStyle: {
        fontSize: 17,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 2,
    },
});


