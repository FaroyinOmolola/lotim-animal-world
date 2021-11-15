import {
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_ONE_PRODUCT_REQUEST,
	GET_ONE_PRODUCT_SUCCESS,
	GET_ONE_PRODUCT_FAIL,
} from "../constants/ProductConstants";

export const GetProductReducer = (state = "", action) => {
	switch (action.type) {
		case GET_PRODUCT_REQUEST:
			return { loading: true, sucess: false };
		case GET_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
				listProduct: action.payload,
			};
		case GET_PRODUCT_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};

export const GetOneProductReducer = (state = "", action) => {
	switch (action.type) {
		case GET_ONE_PRODUCT_REQUEST:
			return { loading: true, sucess: false };
		case GET_ONE_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
				oneProduct: action.payload,
			};
		case GET_ONE_PRODUCT_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};
