import {
	SEND_BOOKING_FAIL,
	SEND_BOOKING_REQUEST,
	SEND_BOOKING_SUCCESS,
	SEND_ENQUIRY_FAIL,
	SEND_ENQUIRY_REQUEST,
	SEND_ENQUIRY_SUCCESS,
	GET_BOOKING_FAIL,
	GET_BOOKING_REQUEST,
	GET_BOOKING_SUCCESS,
	GET_ENQUIRY_FAIL,
	GET_ENQUIRY_REQUEST,
	GET_ENQUIRY_SUCCESS,
	GET_ONE_ENQUIRY_FAIL,
	GET_ONE_ENQUIRY_REQUEST,
	GET_ONE_ENQUIRY_SUCCESS,
	GET_ONE_BOOKING_FAIL,
	GET_ONE_BOOKING_REQUEST,
	GET_ONE_BOOKING_SUCCESS,
} from "../constants/ContactUsConstants";

export const ContactUsReducer = (state = {}, action) => {
	switch (action.type) {
		case SEND_ENQUIRY_REQUEST:
			return { loading: true, sucess: false };
		case SEND_ENQUIRY_SUCCESS:
			return {
				loading: false,
				success: true,
				sentEnquiry: action.payload,
			};
		case SEND_ENQUIRY_FAIL:
			return { loading: false, success: false, error: action.payload };
		case SEND_BOOKING_REQUEST:
			return { loading: true, sucess: false };
		case SEND_BOOKING_SUCCESS:
			return {
				loading: false,
				success: true,
				sentBooking: action.payload,
			};
		case SEND_BOOKING_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};

export const ListEnquiryReducer = (state = "", action) => {
	switch (action.type) {
		case GET_ENQUIRY_REQUEST:
			return { loading: true, sucess: false };
		case GET_ENQUIRY_SUCCESS:
			return {
				loading: false,
				success: true,
				listEnquiry: action.payload,
			};
		case GET_ENQUIRY_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};
export const OneEnquiryReducer = (state = "", action) => {
	switch (action.type) {
		case GET_ONE_ENQUIRY_REQUEST:
			return { loading: true, sucess: false };
		case GET_ONE_ENQUIRY_SUCCESS:
			return {
				loading: false,
				success: true,
				oneEnquiry: action.payload,
			};
		case GET_ONE_ENQUIRY_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};
export const ListBookingReducer = (state = "", action) => {
	switch (action.type) {
		case GET_BOOKING_REQUEST:
			return { loading: true, sucess: false };
		case GET_BOOKING_SUCCESS:
			return {
				loading: false,
				success: true,
				listBooking: action.payload,
			};
		case GET_BOOKING_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};
export const OneBookingReducer = (state = "", action) => {
	switch (action.type) {
		case GET_ONE_BOOKING_REQUEST:
			return { loading: true, sucess: false };
		case GET_ONE_BOOKING_SUCCESS:
			return {
				loading: false,
				success: true,
				oneBooking: action.payload,
			};
		case GET_ONE_BOOKING_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};
