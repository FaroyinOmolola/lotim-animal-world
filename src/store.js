import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ContactUsReducer } from "./reducers/ContactUsReducer";
import { AdminReducer } from "./reducers/AdminReducer";

const initialState = {};

const reducer = combineReducers({
	contactUs: ContactUsReducer,
	adminLoginDetails: AdminReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
