import {
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_FAIL,
	ORDER_CREATE_SUCESS,
} from "../constants/OrderConstants";
import { order } from "../AxiosCall.js";

import { CART_EMPTY } from "../constants/CartConstants";

export const createOrderAction = (body) => async (dispatch) => {
	dispatch({
		type: ORDER_CREATE_REQUEST,
	});
	try {
		const { data } = order(body);
		dispatch({ type: ORDER_CREATE_SUCESS, payload: data });
		dispatch({ type: CART_EMPTY });
		localStorage.removeItem("cartItem");
	} catch (error) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
