
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{props.headerText}</Text>
        </View>
    )
}

export { Header };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80, 
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 1},
    },
    header: {
        fontSize: 20,
    },
});