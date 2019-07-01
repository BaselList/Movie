/**
 * @format
 * @flow
 */

import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {Icon} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Styles from '@Component/CardOne/Style'
import { TMDB_IMG_URL } from './../../Constants/Configs';

const CardOne = ({ info, viewMovie }) => (
	<View>
		<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path || info.poster_path)}` }} style={Styles.imageBackdrop} />
		<LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={Styles.linearGradient} />
		<View style={Styles.cardContainer}>
			<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={Styles.cardImage} />
			<View style={Styles.cardDetails}>
				<Text style={Styles.cardTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
				<View style={Styles.cardGenre}>
					<Text style={Styles.cardGenreItem}>Action</Text>
				</View>
				<View style={Styles.cardNumbers}>
					<View style={Styles.cardStar}>
                        <Icon active name='md-star' type="Ionicons" style={{color: '#F5B642', fontSize: 16}} />
						<Text style={Styles.cardStarRatings}>8.9</Text>
					</View>
					<Text style={Styles.cardRunningHours} />
				</View>
				<Text style={Styles.cardDescription} numberOfLines={3}>
					{info.overview}
				</Text>
				<TouchableOpacity activeOpacity={0.9} onPress={viewMovie.bind(this, info.id)}>
					<View style={Styles.viewButton}>
						<Text style={Styles.viewButtonText}>View Details</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export default CardOne;

