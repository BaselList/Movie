import { Platform } from "react-native";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./RootReducer";

let middleware = [thunk];

if (__DEV__) {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
	middleware = [...middleware];
}

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
  
}