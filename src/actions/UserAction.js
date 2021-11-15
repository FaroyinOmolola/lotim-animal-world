import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
} from "../constants/UserConstants";
import { register, signin } from "../AxiosCall";

export const registerAction = (body) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
			payload: body,
		});

		const { data } = await register(body);

		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data?.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signinAction = (body) => async (dispatch) => {
	try {
		dispatch({ type: USER_SIGNIN_REQUEST, payload: body });

		const { data } = await signin(body);

		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signoutAction = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	localStorage.removeItem("cartItem");
	localStorage.removeItem("shippingAddress");
	dispatch({ type: USER_SIGNOUT });
};
