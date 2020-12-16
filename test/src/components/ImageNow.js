import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const pics = require('../assets/images/rn1.jpeg');


const ImageNow = () => {
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={pics}
                // source={require('../assets/images/rn1.jpeg')}
            />
            <Text style={styles.textHeadStyle}>MERN</Text>
            <Text style={styles.textBodyStyle}>Mordern stack for developing web and mobile application.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f7d7dc',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#321',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 5,
        margin: 10
    },
    textHeadStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e788d'
    },
    textBodyStyle: {
        color: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        marginTop: 5,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#2e788d'
    }
});

export default ImageNow;