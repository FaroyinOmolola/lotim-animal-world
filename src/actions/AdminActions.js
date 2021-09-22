import Axios from "axios";
import {
	ADMIN_LOGIN_DETAILS_SUCCESS,
	ADMIN_LOGIN_DETAILS_REQUEST,
	ADMIN_LOGIN_DETAILS_FAIL,
	ADMIN_REQUEST_VERIFICATION_CODE,
} from "../constants/AdminConstants";

import { URL } from "../config";

export const adminLogin = (adminEmail, adminPassword) => async (dispatch) => {
	dispatch({
		type: ADMIN_LOGIN_DETAILS_REQUEST,
		payload: { adminEmail, adminPassword },
	});
	try {
		const { data } = await Axios.get(`${URL}/register`, {
			adminEmail,
			adminPassword,
		});
		dispatch({
			type: ADMIN_LOGIN_DETAILS_SUCCESS,
			payload: data,
		});
		// dispatch({
		// 	type: ADMIN_REQUEST_VERIFICATION_CODE,
		// });
	} catch (error) {
		dispatch({
			type: ADMIN_LOGIN_DETAILS_FAIL,
			payload:
				error.response && error.response.data?.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const adminRequestVerifcation = (code) => async (dispatch) => {
	dispatch({
		type: ADMIN_REQUEST_VERIFICATION_CODE,
		payload: { code },
	});
};
