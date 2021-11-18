import {
	ADD_TO_CART_ITEM,
	REMOVE_CART_ITEM,
	CART_SAVE_SHIPPING_DETAILS,
	CART_PAYMENT,
} from "../constants/CartConstants";
import { getOneProduct } from "../AxiosCall";

import { USER_SIGNOUT } from "../constants/UserConstants";

export const addToCartAction = (body) => async (dispatch, getState) => {
	const { data } = await getOneProduct(body.productId);
	dispatch({
		type: ADD_TO_CART_ITEM,
		payload: {
			fullDetails: data?.data,
			name: data?.data?.name,
			brand: data?.data?.brand,
			image: data?.data?.imageUnrl,
			variety: data?.data?.varieties[body?.variety]?._id,
			product: data?.data?._id,
			varietyIndex: body?.variety,
			varietyDetails: data?.data?.varieties[body?.variety],
			qty: body?.qty,
		},
	});

	localStorage.setItem("cartItem", JSON.stringify(getState().cart?.cartItems));
};

export const removeFromCartAction = (body) => (dispatch, getState) => {
	dispatch({ type: REMOVE_CART_ITEM, payload: body });
	localStorage.setItem("cartItem", JSON.stringify(getState().cart?.cartItems));
};

export const signoutCart = () => (dispatch) => {
	localStorage.removeItem("cartItem");

	dispatch({ type: USER_SIGNOUT });
};

export const shippingDetailsAction = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data });
};

export const paymentAction = (data) => (dispatch) => {
	dispatch({ type: CART_PAYMENT, payload: data });
};
