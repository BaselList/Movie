import React, { Component } from 'react';
import {
	Image,
	Linking,
	RefreshControl,
	ScrollView,
	ToastAndroid,
	StatusBar,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import numeral from 'numeral';

import * as moviesActions from './../../Stores/MovieAction';
import ProgressBar from '@Component/ProgressBar';
import Style from '@Theme/Style'
import Colors from '../../Constants/Colors';
import Styles from '@Screen/MovieDetail/Style';
import { TMDB_IMG_URL, YOUTUBE_API_KEY, YOUTUBE_URL } from './../../Constants/Configs';

class MovieDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false,
			tab: 0,
            youtubeVideos: [], 
            movieId: ''
		};

		this._onRefresh = this._onRefresh.bind(this);
		this._onScroll = this._onScroll.bind(this);
	}

	componentWillMount() {
        const { navigation } = this.props;
		const movieId = navigation.getParam('movieId', 'title');
		this.setState({
			movieId: movieId
		});
		this._retrieveDetails('',movieId);
	}

	_retrieveDetails(isRefreshed, movieId) {
		this.props.actions.retrieveMovieDetails(movieId)
			.then(() => {
				this._retrieveYoutubeDetails();
			}
		);
		
		if (isRefreshed && this.setState({ isRefreshing: false }));
	}

	_onRefresh() {
		this.setState({ isRefreshing: true });
		this._retrieveDetails('isRefreshed', this.state.movieId);
	}

	_onScroll(event) {
		
	}

	_retrieveYoutubeDetails() {
		this.props.details.videos.results.map(item => {
			let request = axios.get(`${YOUTUBE_URL}/?id=${item.key}&key=${YOUTUBE_API_KEY}&part=snippet`)
								.then(res => {
									let data = this.state.youtubeVideos;
									data.push(res.data.items[0]);
									this.setState({ isLoading: false });
								})
								.catch(error => {
									console.log(error); 
								});
			return request;
		});
	}

	_openYoutube(youtubeUrl) {
		Linking.canOpenURL(youtubeUrl).then(supported => {
			if (supported) {
				Linking.openURL(youtubeUrl);
			} else {
				ToastAndroid.show(`Sorry, We Don't know how to handle this url ${youtubeUrl}`, ToastAndroid.SHORT);
			}
		});
	}

	render() {
		const { details } = this.props;
		const info = details;
		// const director = _.filter(info.casts.crew, { department: 'Directing', job: 'Director' });
		// const releaseDate = moment(info.release_date).format('LL');
		// const budget = (info.budget === 0 ? 'n/a' : numeral(info.budget).format('$ 0,0'));

		return (
			this.state.isLoading ? <View style={Styles.progressBar}><ProgressBar /></View> :
			<Container style={Style.bgMain}>
				<Header style={Style.navigation}>
					<StatusBar backgroundColor={Colors.mainColor} animated barStyle="light-content" />

					<View style={Style.actionBarLeft}>
						<Button transparent style={Style.actionBarBtn} onPress={() => {
							this.props.navigation.goBack()
						}}>
							<Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
						</Button>
					</View>
					<View style={Style.actionBarMiddle}>
						<Text style={Style.actionBarText}>{'Movie Detail'}</Text>
					</View>
					<View style={Style.actionBarRight}>
					</View>
				</Header>

				<Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							colors={['#EA0000']}
							tintColor="white"
							title="loading..."
							titleColor="white"
							progressBackgroundColor="white"
						/>
					}>
					<View>
						<Swiper
							style={Styles.swiper}
							autoplay
							autoplayTimeout={4}
							showsPagination={false}
							height={248}
							loop
							index={5}>
							{
								info.images.backdrops.map((item, index) => (
									<View key={index}>
										<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(item.file_path)}` }} style={Styles.imageBackdrop} />
										<LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']} style={Styles.linearGradient} />
									</View>
								))
							}
						</Swiper>
						<View style={Styles.cardContainer}>
							<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={Styles.cardImage} />
							<View style={Styles.cardDetails}>
								<Text style={Styles.cardTitle}>{info.original_title}</Text>
								<Text style={Styles.cardTagline}>{info.tagline}</Text>
								<View style={Styles.cardGenre}>
									{
										info.genres.map(item => (
											<Text key={item.id} style={Styles.cardGenreItem}>{item.name}</Text>
										))
									}
								</View>
								<View style={Styles.cardNumbers}>
									<View style={Styles.cardStar}>
										<Icon active name='md-star' type="Ionicons" style={{color: '#F5B642', fontSize: 16}} />
										<Text style={Styles.cardStarRatings}>8.9</Text>
									</View>
									<Text style={Styles.cardRunningHours} />
								</View>
							</View>
						</View>
					</View>
					<View style={Styles.contentContainer}>
						<View style={Styles.overview}>
							<Text style={Styles.label}>Overview</Text>
							<Text style={Styles.overviewText}>
								{info.overview}
							</Text>
							<View style={Styles.labelRow}>
								<Text style={Styles.label}>Release Date</Text>
								<Text style={Styles.value}>{moment(info.release_date).format('LL')}</Text>
							</View>
							<View style={Styles.labelRow}>
								<Text style={Styles.label}>Directed By</Text>
								<Text style={Styles.value}>{_.filter(info.casts.crew, { department: 'Directing', job: 'Director' })[0].name}</Text>
							</View>
							<View style={Styles.labelRow}>
								<Text style={Styles.label}>Budget</Text>
								<Text style={Styles.value}>{(info.budget === 0 ? 'n/a' : numeral(info.budget).format('$ 0,0'))}</Text>
							</View>
						</View>
					</View>
					<View style={Styles.section}>
						<View style={Styles.headerBg}>
							<Icon name="group" type="FontAwesome" style={Styles.headerIcon} />
							<Text style={Styles.sHeader}>{'   Casts'}</Text>
							<Right>
							</Right>
						</View>
						<FlatList
							data={info.casts.cast}
							horizontal
							style={Styles.agents}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item, separators }) => (
								<TouchableOpacity style={Styles.itemAgent} underlayColor='transparent'>
									<View>
										<Image source={{ uri: `${TMDB_IMG_URL}/w185/${item.profile_path}` }} style={Styles.itemAgentImg} />
										<Text style={Styles.itemAgentName}>{item.name}</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
					<View style={Styles.section}>
						<View style={Styles.headerBg}>
							<Icon name="videocam" type="Ionicons" style={Styles.headerIcon} />
							<Text style={Styles.sHeader}>{'Trailer'}</Text>
							{/* {
								trailers.map(item => (
									console.log(item.snippet.title)
								))
							} */}
						</View>
						<FlatList
							data={_.take(this.state.youtubeVideos, 10)}
							horizontal
							showsHorizontalScrollIndicator={false}
							style={Styles.flatList}
							renderItem={({ item, separators }) => (
								<TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={()=> this._openYoutube(`http://youtube.com/watch?v=${item.id}`)}>
									<View>
										<View>
											<Image source={{ uri: `${item.snippet.thumbnails.medium.url}` }} style={Styles.itemImg} />
											<View style={Styles.itemNoCrv}></View>
										</View>
										{/* <Text style={Styles.itemPriceSm}>{item.price}</Text> */}
										<Text style={Styles.itemLocation}>{item.snippet.title}</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		details: state.movies.details,
		similarMovies: state.movies.similarMovies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
