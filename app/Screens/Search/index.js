import React, { Component } from 'react';
import {
	ListView,
	TextInput,
	StatusBar
} from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TMDB_URL, TMDB_API_KEY } from './../../Constants/Configs';
import * as moviesActions from './../../Stores/MovieAction';
import CardThree from '@Component/CardThree';
import styles from '@Screen/Search/Style';
import Style from '@Theme/Style'
import Colors from '../../Constants/Colors';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			currentPage: 1,
			searchResults: {
				results: []
			},
			query: null
		};

		this._viewMovie = this._viewMovie.bind(this);
		this._handleTextInput = this._handleTextInput.bind(this);
	}

	_handleTextInput(event) {
		const query = event.nativeEvent.text;
		this.setState({ query });
		if (!query) this.setState({ query: '' });

		setTimeout(() => {
			if (query.length) {
				this.props.actions.retrieveMoviesSearchResults(this.state.query, 1)
				.then(() => {
					const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
					const dataSource = ds.cloneWithRows(this.props.searchResults.results);
					this.setState({
						dataSource,
						isLoading: false
					});
				});
			}
		}, 500);
	}

	_retrieveNextPage() {
		if (this.state.currentPage !== this.props.searchResults.total_pages) {
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

			axios.get(`${TMDB_URL}/search/movie/?api_key=${TMDB_API_KEY}&query=${this.state.query}&page=${page}`)
				.then(res => {
					const data = this.state.searchResults.results;
					const newData = res.data.results;

					newData.map((item, index) => data.push(item));

					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.state.searchResults.results)
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

	_renderListView() {
		let listView;
		if (this.state.query) {
			listView = (
				<ListView
					enableEmptySections
					onEndReached={type => this._retrieveNextPage()}
					onEndReachedThreshold={1200}
					dataSource={this.state.dataSource}
					renderRow={rowData => <CardThree info={rowData} viewMovie={this._viewMovie} />}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
				/>
			);
		} else {
			listView = <View />;
		}

		return listView;
	}

	render() {
		return (
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
						<Text style={Style.actionBarText}>Search Movie</Text>
					</View>
					<View style={Style.actionBarRight}>
					</View>
				</Header>
				<Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
					<View style={styles.searchbox}>
						<View style={styles.searchboxBorder}>
							<TextInput
								style={styles.textInput}
								autoFocus
								returnKeyType={'search'}
								value={this.state.query}
								onChange={this._handleTextInput}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					{ !this.state.isLoading && this._renderListView() }
				</Content>
			</Container>

		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		searchResults: state.movies.searchResults
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
