import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//const AlbumList = () => {
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		//console.log('componentWillMount in AlbumList');
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));//console.log(response));
		//debugger;
		//console.log(this.state.albums);
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			//<Text key={album.title}>{album.title}</Text>);
			//<AlbumDetail key={album.title}>{album.title}</AlbumDetail>
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()} 
			</ScrollView>
		);
	}
}

export default AlbumList;
