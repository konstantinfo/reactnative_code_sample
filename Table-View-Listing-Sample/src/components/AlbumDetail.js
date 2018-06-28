import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { 
		thumbnailStyle, 
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		albumCoverStyle 
	} = styles;

	return (
		<Card>
			<CardSection>
			<View style={thumbnailContainerStyle}>
				<Image
					style={thumbnailStyle} 
					source={{ uri: thumbnail_image }} 
				/>
			</View>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>{title}</Text>
				<Text>{artist}</Text>
			</View>
			</CardSection>

			<CardSection>
				<Image 
					style={albumCoverStyle}
					source={{ uri: image }} 
				/>
			</CardSection>

			<CardSection>
				<Button buttonPressed={() => Linking.openURL(url)}>
					BUY NOW
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		marginLeft: -10
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumCoverStyle: {
		height: 300,
		flex: 1,
		width: null,
		alignItems: 'center',
		justifyContent: 'center'
	}
};


export default AlbumDetail;
