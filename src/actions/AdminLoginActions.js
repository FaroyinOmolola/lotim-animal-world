import {
	ADMIN_LOGIN_REQUEST,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGIN_FAIL,
	ADMIN_TOKEN_EXPIRED,
	ADMIN_VERIFICATION_REQUEST,
	ADMIN_VERIFICATION_SUCCESS,
	ADMIN_VERIFICATION_FAIL,
	ADMIN_SIGNOUT,
} from "../constants/AdminConstants";

import { adminLogin, adminVerification } from "../AxiosCall";

export const adminLoginAction = (body) => async (dispatch) => {
	dispatch({
		type: ADMIN_LOGIN_REQUEST,
		payload: body,
	});
	try {
		const { data } = await adminLogin(body);
		dispatch({
			type: ADMIN_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ADMIN_LOGIN_FAIL,
			payload: error.message,
		});
		dispatch({
			type: ADMIN_TOKEN_EXPIRED,
			payload: error.message,
		});
	}
};

export const adminVerificationAction = (body) => async (dispatch) => {
	dispatch({
		type: ADMIN_VERIFICATION_REQUEST,
		payload: body,
	});
	try {
		const { data } = await adminVerification(body);
		dispatch({
			type: ADMIN_VERIFICATION_SUCCESS,
			payload: data,
		});

		localStorage.setItem("adminVerified", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: ADMIN_VERIFICATION_FAIL,
			payload: error.message,
		});
	}
};

export const adminSignout = () => (dispatch) => {
	localStorage.clear();

	dispatch({ type: ADMIN_SIGNOUT });
};
