import React, {Component} from 'react';
import {View, ScrollView, Text, ActivityIndicator, FlatList} from 'react-native';




// my imported components 
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	albums: [],
	  	isLoading: true,
	  };
	}

	componentWillMount(){
		console.log('components will mount');
		this.getMusics();
	}


	getMusics = () => {
		return fetch('https://rallycoding.herokuapp.com/api/music_albums')
	      .then((response) => response.json())
	      .then((responseJson) => {

	        this.setState({
	          isLoading: false,
	          albums: responseJson,
	        }, () => {
	        	console.log(this.state.albums)
	        });

	      })
	      .catch((error) =>{
	        console.error(error);
	      });
	}

	_renderItem = ({item}) => {
		return(

			<AlbumDetails album={item} />
		)
	}

	render(){
		if(this.state.isLoading){
		    return(
		        <View style={{flex: 1, padding: 20}}>
		          <ActivityIndicator/>
		        </View>
		    )
		}

		return(
			<ScrollView>
				<FlatList
					data={this.state.albums}
					keyExtractor={item => item.title}
					renderItem={this._renderItem}
				/>
			</ScrollView>
		)
	}
}

export default AlbumList;