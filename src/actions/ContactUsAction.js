import Axios from "axios";
import {
	SUBMIT_CONTACT_US_FAIL,
	SUBMIT_CONTACT_US_REQUEST,
	SUBMIT_CONTACT_US_SUCCESS,
} from "../constants/ContactUsConstants";

import { URL } from "../config";

export const contactUs =
	(
		fullname,
		reasonValue,
		contactEmail,
		contactNumber,
		enquiryDetails,
		appointmentDate,
		appointmentTime,
		appointmentAim
	) =>
	async (dispatch) => {
		dispatch({
			type: SUBMIT_CONTACT_US_REQUEST,
			payload: {
				fullname,
				reasonValue,
				contactEmail,
				contactNumber,
				enquiryDetails,
				appointmentDate,
				appointmentTime,
				appointmentAim,
			},
		});
		try {
			const { data } = await Axios.get(`${URL}/register`, {
				fullname,
				reasonValue,
				contactEmail,
				contactNumber,
				enquiryDetails,
				appointmentDate,
				appointmentTime,
				appointmentAim,
			});
			dispatch({
				type: SUBMIT_CONTACT_US_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: SUBMIT_CONTACT_US_FAIL,
				payload:
					error.response && error.response.data?.message
						? error.response.data.message
						: error.message,
			});
		}
	};
