import { persistCombineReducers } from 'redux-persist'
import { combineReducers } from 'redux';
import movies from './MovieReducer';
import storage from 'redux-persist/es/storage'

const config = {
	key: 'root',
	storage,
}

const rootReducer = persistCombineReducers(
	config, 
	{
		movies
	}
);

export default rootReducer;

