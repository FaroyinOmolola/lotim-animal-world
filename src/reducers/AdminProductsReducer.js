import {
	ADMIN_ADD_PRODUCT_REQUEST,
	ADMIN_ADD_PRODUCT_SUCCESS,
	ADMIN_ADD_PRODUCT_FAIL,
	ADMIN_GET_PRODUCT_REQUEST,
	ADMIN_GET_PRODUCT_SUCCESS,
	ADMIN_GET_PRODUCT_FAIL,
	ADMIN_GET_ONE_PRODUCT_REQUEST,
	ADMIN_GET_ONE_PRODUCT_SUCCESS,
	ADMIN_GET_ONE_PRODUCT_FAIL,
} from "../constants/AdminConstants";

export const AdminAddProductReducer = (state = [], action) => {
	switch (action.type) {
		case ADMIN_ADD_PRODUCT_REQUEST:
			return { loading: true, sucess: false };
		case ADMIN_ADD_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
				addProduct: [...state, action.payload],
			};
		case ADMIN_ADD_PRODUCT_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};

export const AdminGetProductReducer = (state = "", action) => {
	switch (action.type) {
		case ADMIN_GET_PRODUCT_REQUEST:
			return { loading: true, sucess: false };
		case ADMIN_GET_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
				listAdminProduct: action.payload,
			};
		case ADMIN_GET_PRODUCT_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};

export const AdminGetOneProductReducer = (state = "", action) => {
	switch (action.type) {
		case ADMIN_GET_ONE_PRODUCT_REQUEST:
			return { loading: true, sucess: false };
		case ADMIN_GET_ONE_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
				oneAdminProduct: action.payload,
			};
		case ADMIN_GET_ONE_PRODUCT_FAIL:
			return { loading: false, success: false, error: action.payload };

		default:
			return state;
	}
};
