import {
	ADMIN_LOGIN_REQUEST,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGIN_FAIL,
	ADMIN_VERIFICATION_REQUEST,
	ADMIN_VERIFICATION_SUCCESS,
	ADMIN_VERIFICATION_FAIL,
	ADMIN_SIGNOUT,
} from "../constants/AdminConstants";

export const AdminLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_LOGIN_REQUEST:
			return { loading: true, sucess: false };
		case ADMIN_LOGIN_SUCCESS:
			return {
				loading: false,
				success: true,
				adminLogin: action.payload,
			};
		case ADMIN_LOGIN_FAIL:
			return { loading: false, success: false, error: action.payload };
		case ADMIN_SIGNOUT:
			return {};
		default:
			return state;
	}
};

export const AdminVerifiedReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_VERIFICATION_REQUEST:
			return { loading: true, success: false };
		case ADMIN_VERIFICATION_SUCCESS:
			return {
				loading: false,
				success: true,
				adminVerified: action.payload,
			};
		case ADMIN_VERIFICATION_FAIL:
			return { loading: false, success: false, error: action.payload };
		case ADMIN_SIGNOUT:
			return {};
		default:
			return state;
	}
};
