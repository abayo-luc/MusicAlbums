import React, {Component} from 'react';
import {View, Text} from 'react-native';


class AlbumList extends Component {
	componentWillMount(){
		console.log('components will mount');
	}

	render(){
		return(
			<View>
				<Text>In the Albums!</Text>
			</View>
		)
	}
}

export default AlbumList;