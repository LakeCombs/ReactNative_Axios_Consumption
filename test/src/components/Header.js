import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#321',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
})

export default Header;