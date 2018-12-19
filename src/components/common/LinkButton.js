import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'; 

const LinkButton = ({onPress, children}) => {

    return (
        <TouchableOpacity style={styles.containerStyle} onPress={onPress}>            
            <Text style={styles.buttonStyle}>
            {children}
            </Text>            
        </TouchableOpacity>
    );
};

export default LinkButton;

const styles = StyleSheet.create({
    buttonStyle: { 
        color: '#b22727',
        fontWeight: 'bold', 
    },
    containerStyle: {  
        flex: 1,
        justifyContent: 'center', 
         alignItems: 'center',
        height: 44,
        width: '100%',   
        borderColor: '#b22727',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});