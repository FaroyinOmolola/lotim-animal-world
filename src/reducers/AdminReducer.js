import {
	ADMIN_LOGIN_DETAILS_SUCCESS,
	ADMIN_LOGIN_DETAILS_REQUEST,
	ADMIN_LOGIN_DETAILS_FAIL,
	ADMIN_REQUEST_VERIFICATION_CODE,
} from "../constants/AdminConstants";

export const AdminReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_LOGIN_DETAILS_REQUEST:
			return { loading: true, sucess: false };
		case ADMIN_LOGIN_DETAILS_SUCCESS:
			return {
				loading: false,
				success: true,
				adminLoginDetails: action.payload,
			};
		case ADMIN_LOGIN_DETAILS_FAIL:
			return { loading: false, success: false, error: action.payload };
		case ADMIN_REQUEST_VERIFICATION_CODE:
			return { code: action.payload, sucess: false };
		default:
			return state;
	}
};
