import {
	ADMIN_GET_IMAGE_FAIL,
	ADMIN_GET_IMAGE_REQUEST,
	ADMIN_GET_IMAGE_SUCCESS,
	ADMIN_UPLOAD_IMAGE_SUCCESS,
} from "../constants/AdminConstants";

export const AdminImageReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_GET_IMAGE_FAIL:
			return { ...state, error: action.payload };
		case ADMIN_GET_IMAGE_REQUEST:
			return { ...state, loading: true };
		case ADMIN_GET_IMAGE_SUCCESS:
			return { ...state, loading: false, imageUrl: action.payload };
		case ADMIN_UPLOAD_IMAGE_SUCCESS:
			return { ...state, loading: false, id: action.payload };
		default:
			return state;
	}
};
