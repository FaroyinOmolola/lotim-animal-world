import {
	ADD_TO_CART_ITEM,
	REMOVE_CART_ITEM,
	CART_SAVE_SHIPPING_DETAILS,
	CART_PAYMENT,
	CART_EMPTY,
} from "../constants/CartConstants";
import { USER_SIGNOUT } from "../constants/UserConstants";

export const AddToCartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case ADD_TO_CART_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find(
				(x) => x.product === item.product && x.variety === item.variety
			);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product &&
						x.variety === existItem.variety
							? item
							: x
					),
				};
			} else {
				return { ...state, cartItems: [...state.cartItems, item] };
			}
		case REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(x) => x.variety !== action.payload
				),
			};
		case CART_SAVE_SHIPPING_DETAILS:
			return {
				...state,
				shippingDetails: action.payload,
			};
		case CART_PAYMENT:
			return {
				...state,
				payment: action.payload,
			};
		case CART_EMPTY:
			return { ...state, cartItems: [] };
		case USER_SIGNOUT:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};
