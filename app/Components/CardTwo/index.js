import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import Styles from '@Component/CardTwo/Style'
import { TMDB_IMG_URL } from './../../Constants/Configs';

const CardTwo = ({ info, viewMovie }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={viewMovie.bind(this, info.id)}>
		<View style={Styles.cardContainer}>
			<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={Styles.cardImage} />
			<View style={Styles.cardTitleContainer}>
				<Text style={Styles.cardTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default CardTwo;
