import React, { Component, useEffect, useState } from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';



class AlbumList extends Component {
    state = {
        albums: []
    }

    async componentWillMount() {
        const responds = await axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        const albums = await responds.data
        return this.setState({albums})
    }

    renderAlbums = () => {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}



export default AlbumList;