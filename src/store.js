import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
	ContactUsReducer,
	ListEnquiryReducer,
	ListBookingReducer,
	OneEnquiryReducer,
	OneBookingReducer,
} from "./reducers/ContactUsReducer";
import {
	AdminLoginReducer,
	AdminVerifiedReducer,
} from "./reducers/AdminLoginReducer";
import {
	AdminAddProductReducer,
	AdminGetProductReducer,
	AdminGetOneProductReducer,
} from "./reducers/AdminProductsReducer";
import {
	GetProductReducer,
	GetOneProductReducer,
} from "./reducers/ClientProductReducers";
import { AdminImageReducer } from "./reducers/AdminImageReducer";
import { AddToCartReducer } from "./reducers/CartReducer";
import {
	UserRegisterReducer,
	UserSigninReducer,
} from "./reducers/UserReducers";
import { CreateOrderReducer } from "./reducers/OrderReducer";

const initialState = {
	adminVerified: {
		adminVerified: localStorage.getItem("adminVerified")
			? JSON.parse(localStorage.getItem("adminVerified"))
			: null,
	},
	listBooking: {
		listBooking: localStorage.getItem("listBooking")
			? JSON.parse(localStorage.getItem("listBooking"))
			: null,
	},
	listEnquiry: {
		listEnquiry: localStorage.getItem("listEnquiry")
			? JSON.parse(localStorage.getItem("listEnquiry"))
			: null,
	},
	listAdminProduct: {
		listAdminProduct: localStorage.getItem("listAdminProduct")
			? JSON.parse(localStorage.getItem("listAdminProduct"))
			: null,
	},
	listProduct: {
		listProduct: localStorage.getItem("listProduct")
			? JSON.parse(localStorage.getItem("listProduct"))
			: null
	},
	cart: {
	
		cartItems: localStorage.getItem("cartItem")
			? JSON.parse(localStorage.getItem("cartItem"))
			: []
		// shippingAddress: localStorage.getItem("shippingAddress")
		// 	? JSON.parse(localStorage.getItem("shippingAddress"))
		// 	: {},
		// paymentMethod: "PayPal",
	},
	userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null
	},
};

const reducer = combineReducers({
	contactUs: ContactUsReducer,
	adminLogin: AdminLoginReducer,
	adminVerified: AdminVerifiedReducer,
	adddedProduct: AdminAddProductReducer,
	listAdminProduct: AdminGetProductReducer,
	oneAdminProduct: AdminGetOneProductReducer,
	listProduct: GetProductReducer,
	oneProduct: GetOneProductReducer,
	listEnquiry: ListEnquiryReducer,
	oneEnquiry: OneEnquiryReducer,
	listBooking: ListBookingReducer,
	oneBooking: OneBookingReducer,
	imageReducer: AdminImageReducer,
	cart: AddToCartReducer,
	userSignin: UserSigninReducer,
	userRegister: UserRegisterReducer,
	orderCreated: CreateOrderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
