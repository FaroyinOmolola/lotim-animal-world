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

import {
	sendEnquiry,
	sendBooking,
	getBooking,
	getEnquiry,
	getOneEnquiry,
	getOneBooking,
} from "../AxiosCall";

export const sendEnquiryAction = (body) => async (dispatch) => {
	dispatch({
		type: SEND_ENQUIRY_REQUEST,
		payload: body,
	});
	try {
		const { data } = await sendEnquiry(body);
		dispatch({
			type: SEND_ENQUIRY_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SEND_ENQUIRY_FAIL,
			payload:
				error.response && error.response.data?.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const sendBookingAction = (body) => async (dispatch) => {
	dispatch({
		type: SEND_BOOKING_REQUEST,
		payload: body,
	});
	try {
		const { data } = await sendBooking(body);
		dispatch({
			type: SEND_BOOKING_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SEND_BOOKING_FAIL,
			payload:
				error.response && error.response.data?.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getEnquiryAction = () => async (dispatch) => {
	dispatch({
		type: GET_ENQUIRY_REQUEST,
	});
	try {
		const { data } = await getEnquiry();
		dispatch({
			type: GET_ENQUIRY_SUCCESS,
			payload: data.data.enquiries,
		});
		localStorage.setItem(
			"listEnquiry",
			JSON.stringify(data.data.enquiries)
		);
	} catch (error) {
		dispatch({
			type: GET_ENQUIRY_FAIL,
			payload: error.message,
		});
	}
};
export const getOneEnquiryAction = (id) => async (dispatch) => {
	dispatch({
		type: GET_ONE_ENQUIRY_REQUEST,
	});
	try {
		const { data } = await getOneEnquiry(id);
		dispatch({
			type: GET_ONE_ENQUIRY_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_ONE_ENQUIRY_FAIL,
			payload: error.message,
		});
	}
};

export const getBookingAction = () => async (dispatch) => {
	dispatch({
		type: GET_BOOKING_REQUEST,
	});
	try {
		const { data } = await getBooking();
		dispatch({
			type: GET_BOOKING_SUCCESS,
			payload: data.data.appointment,
		});

		localStorage.setItem(
			"listBooking",
			JSON.stringify(data.data.appointment)
		);
	} catch (error) {
		dispatch({
			type: GET_BOOKING_FAIL,
			payload: error.message,
		});
	}
};
export const getOneBookingAction = (id) => async (dispatch) => {
	dispatch({
		type: GET_ONE_BOOKING_REQUEST,
	});
	try {
		const { data } = await getOneBooking(id);
		dispatch({
			type: GET_ONE_BOOKING_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		dispatch({
			type: GET_ONE_BOOKING_FAIL,
			payload: error.message,
		});
	}
};
