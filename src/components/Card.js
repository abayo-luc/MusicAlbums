import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Card = (props) => {
	return(
		<View style={styles.container}>{props.children}</View>
	)
}


const styles = EStyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#DDD',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
})


Card.propTypes = {
  children: PropTypes.any,
}
export default Card;