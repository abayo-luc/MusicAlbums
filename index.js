import React, {Component} from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


//my reusable components
import Header from './src/components/header';
// import AlbumList from './src/components/AlbumList';
import AlbumList from './src/components/AlbumList';

EStyleSheet.build({
	$primaryColor: '#000',
})

const App = () =>(
		<View>
			<Header headerText='Albums!'/>
			<AlbumList/>
		</View>
)
export default App;