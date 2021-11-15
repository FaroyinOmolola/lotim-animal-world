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

import {
	adminAddProduct,
	adminGetProduct,
	adminGetOneProduct,
} from "../AxiosCall";

export const adminAddProductAction = (body) => async (dispatch) => {
	try {
		dispatch({
			type: ADMIN_ADD_PRODUCT_REQUEST,
			payload: body,
		});
		const { data } = await adminAddProduct({
			...body,
			varieties: body.varieties?.map((value) => {
				return { ...value, imageDataURL: undefined };
			}),
		});
		dispatch({
			type: ADMIN_ADD_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ADMIN_ADD_PRODUCT_FAIL,
			payload: error.message,
		});
	}
};

export const getImageAction = (imageId) => async (dispatch) => {
	try {
	} catch (err) {
		dispatch({
			type: ADMIN_ADD_PRODUCT_FAIL,
			payload: err.message,
		});
	}
};

export const adminGetProductAction = () => async (dispatch) => {
	dispatch({
		type: ADMIN_GET_PRODUCT_REQUEST,
	});
	try {
		const { data } = await adminGetProduct();
		dispatch({
			type: ADMIN_GET_PRODUCT_SUCCESS,
			payload: data.data,
		});
		localStorage.setItem("listAdminProduct", JSON.stringify(data.data));
	} catch (error) {
		dispatch({
			type: ADMIN_GET_PRODUCT_FAIL,
			payload: error.message,
		});
	}
};

export const adminGetOneProductAction = (id) => async (dispatch) => {
	try {
		dispatch({
			type: ADMIN_GET_ONE_PRODUCT_REQUEST,
		});
		const { data } = await adminGetOneProduct(id);
		dispatch({
			type: ADMIN_GET_ONE_PRODUCT_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		dispatch({
			type: ADMIN_GET_ONE_PRODUCT_FAIL,
			payload: error.message,
		});
	}
};
