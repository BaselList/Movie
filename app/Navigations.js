import React from 'react'
import {Dimensions} from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation"

import MovieSplash from '@Screen/SplashScreen'
import MovieHome from '@Screen/Home'
import MovieSearch from '@Screen/Search'
import MovieList from '@Screen/MovieList'
import MovieDetail from '@Screen/MovieDetail'

import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get("window").width;
const AppNav = createStackNavigator(
    {
        MovieSplash: {
            screen: MovieSplash
        },
        MovieHome: {
            screen: MovieHome
        },
        MovieSearch: {
            screen: MovieSearch
        },
        MovieList: {
            screen: MovieList
        },
        MovieDetail:{
            screen: MovieDetail
        }
    },
    {
        headerMode: "none",
        initialRouteName: "MovieSplash"
    }
)

const RootApp = createAppContainer(AppNav);

export default class App extends React.Component {
    render() {
        return (
            <RootApp ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
        );
    }
}