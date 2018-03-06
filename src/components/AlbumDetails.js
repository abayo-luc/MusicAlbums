import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


// my imported element
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({album}) => {
	const {title, artist, thumbnail_image, image, url} = album;
	const {headerContent, thumbnail, thumbnailContainer, headerText, imageStyle} = styles;
	return(
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
					<Image source={{uri: thumbnail_image}} style={thumbnail}/>
				</View>
				<View style={headerContent}>
					<Text style={headerText}>{title}</Text>
					<Text style={headerText}>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image source={{uri: image}} style={imageStyle}/>
			</CardSection>

			<CardSection>
				<Button/>
			</CardSection>
		</Card>
	)
}

AlbumDetails.propTypes = {
  album: PropTypes.any,
}


const styles = EStyleSheet.create({
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	headerText:{
		fontSize: 18,
	},
	thumbnail: {
		height: 50,
		width: 50,
	}, 
	thumbnailContainer:{
		justifyContent: 'center',
		alignItems: 'center', 
		marginTop: 10,
		marginBottom: 10,
	},
	imageStyle:{
		height: 300,
		flex: 1,
		width: null,
	}
})
export default AlbumDetails;