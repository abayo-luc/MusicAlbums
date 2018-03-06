import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const CardSection = (props) => {
	return(
		<View style={styles.container}>{props.children}</View>
	)
}

const styles = EStyleSheet.create({
	container:{
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	}
})

CardSection.propTypes = {
  children: PropTypes.any,
}

export default CardSection;