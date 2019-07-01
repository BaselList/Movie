import React, { Component } from 'react';
import {
	Platform,
	ListView,
	RefreshControl,
	StatusBar,
} from 'react-native';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import { TMDB_URL, TMDB_API_KEY } from './../../Constants/Configs';
import * as moviesActions from './../../Stores/MovieAction';
import CardThree from '@Component/CardThree';
import ProgressBar from '@Component/ProgressBar';
import styles from '@Screen/MovieList/Style';
import Style from '@Theme/Style'
import Colors from '../../Constants/Colors';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false,
			currentPage: 1,
			list: {
				results: []
			},
			type : '',
			title: ''
		};

		this._viewMovie = this._viewMovie.bind(this);
		this._onRefresh = this._onRefresh.bind(this);
		// this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
	}

	componentWillMount() {
		const { navigation } = this.props;
		const title = navigation.getParam('title', 'title');
		const type = navigation.getParam('type', 'type');
		this.setState({
			title: title,
			type: type
		});
		this._retrieveMoviesList('', type, title);
	}

	_retrieveMoviesList(isRefreshed, _type, _title) {
		this.props.actions.retrieveMoviesList(_type, this.state.currentPage)
			.then(() => {
				const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
				const dataSource = ds.cloneWithRows(this.props.list.results);
				this.setState({
					list: this.props.list,
					dataSource,
					isLoading: false
				});
			});

		if (isRefreshed === 'isRefreshed'){
			this.setState({ isRefreshing: false })
		}
	}

	_retrieveNextPage(type) {
		if (this.state.currentPage !== this.props.list.total_pages) {
			this.setState({
				currentPage: this.state.currentPage + 1
			});

			let page;
			if (this.state.currentPage === 1) {
				page = 2;
				this.setState({ currentPage: 2 });
			} else {
				page = this.state.currentPage + 1;
			}

			axios.get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
				.then(res => {
					const data = this.state.list.results;
					const newData = res.data.results;

					newData.map((item, index) => data.push(item));

					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.state.list.results)
					});
				}).catch(err => {
					console.log('next page', err);
				});
		}
	}

	_viewMovie(movieId) {
		this.props.navigation.navigate('MovieDetail', {
			movieId
		});
	}

	_onRefresh() {
		this.setState({ isRefreshing: true });
		this._retrieveMoviesList('isRefreshed', this.state.type, this.state.title);
	}

	_onNavigatorEvent(event) {
	}

	render() {
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :

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
						<Text style={Style.actionBarText}>{this.state.title}</Text>
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
						<ListView
							style={styles.container}
							enableEmptySections
							onEndReached={type => this._retrieveNextPage(this.state.type)}
							onEndReachedThreshold={1200}
							dataSource={this.state.dataSource}
							renderRow={rowData => <CardThree info={rowData} viewMovie={this._viewMovie} />}
							renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
							renderFooter={() => <View style={{ height: 50 }}><ProgressBar /></View>}
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
							}
						/>
					</Content>
				</Container>
		);
	}
}
let navigatorStyle = {};

if (Platform.OS === 'ios') {
	navigatorStyle = {
		navBarTranslucent: true,
		drawUnderNavBar: true
	};
} else {
	navigatorStyle = {
		navBarBackgroundColor: '#0a0a0a'
	};
}

function mapStateToProps(state, ownProps) {
	return {
		list: state.movies.list
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
