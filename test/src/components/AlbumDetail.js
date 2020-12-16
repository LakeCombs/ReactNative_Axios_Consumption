import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    const handleOnPress = () => {
         Linking.openURL(props.album.url)
    }
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailcontainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentSyle}>
                    <Text style={styles.headerTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: props.album.image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={handleOnPress} buttonText='Buy Now!'/>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentSyle: {
        flexDirection: 'column',
        justifycontent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailcontainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail;