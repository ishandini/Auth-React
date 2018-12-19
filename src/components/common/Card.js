import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => { 
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

export { Card };

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
});
