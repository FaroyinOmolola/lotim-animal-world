import {
	SUBMIT_CONTACT_US_FAIL,
	SUBMIT_CONTACT_US_REQUEST,
	SUBMIT_CONTACT_US_SUCCESS,
} from "../constants/ContactUsConstants";

export const ContactUsReducer = (state = {}, action) => {
	switch (action.type) {
		case SUBMIT_CONTACT_US_REQUEST:
			return { loading: true, sucess: false };
		case SUBMIT_CONTACT_US_SUCCESS:
			return { loading: false, success: true, contactUs: action.payload };
		case SUBMIT_CONTACT_US_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};
