import { adminGetFile, adminUploadFile } from "../AxiosCall.js";
import {
	ADMIN_GET_IMAGE_FAIL,
	ADMIN_GET_IMAGE_REQUEST,
	ADMIN_GET_IMAGE_SUCCESS,
	ADMIN_UPLOAD_IMAGE_SUCCESS,
} from "../constants/AdminConstants";

export const getImageAction = (imageId) => async (dispatch) => {
	try {
		dispatch({
			type: ADMIN_GET_IMAGE_REQUEST,
		});

		const response = await adminGetFile(imageId);
		if (response.status) {
			dispatch({
				type: ADMIN_GET_IMAGE_SUCCESS,
				payload: URL.createObjectURL(
					new Blob([new Uint8Array(response.data?.data?.Body.data)], {
						type: response.data?.data?.ContentType,
					})
				),
			});
		}
	} catch (err) {
		dispatch({
			type: ADMIN_GET_IMAGE_FAIL,
			payload: err.message,
		});
	}
};

export const postImageAction = (file) => async (dispatch) => {
	try {
		dispatch({
			type: ADMIN_GET_IMAGE_REQUEST,
		});

		const response = await adminUploadFile(file);
		console.log(response);
		if (response.status) {
			dispatch({
				type: ADMIN_UPLOAD_IMAGE_SUCCESS,
				payload: response.data?.data[0]?._id,
			});
		}
	} catch (err) {
		console.log(err, "@@@@@@@@@@@@@@@");
		dispatch({
			type: ADMIN_GET_IMAGE_FAIL,
			payload: err.message,
		});
	}
};
