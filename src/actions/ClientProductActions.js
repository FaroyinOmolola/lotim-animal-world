import {
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_ONE_PRODUCT_REQUEST,
	GET_ONE_PRODUCT_SUCCESS,
	GET_ONE_PRODUCT_FAIL,
} from "../constants/ProductConstants";

import { getProduct, getOneProduct } from "../AxiosCall";

export const getProductsAction = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_PRODUCT_REQUEST,
		});
		const { data } = await getProduct();
		dispatch({
			type: GET_PRODUCT_SUCCESS,
			payload: data.data,
		});
		localStorage.setItem("listProduct", JSON.stringify(data.data));
	} catch (error) {
		dispatch({
			type: GET_PRODUCT_FAIL,
			payload: error.message,
		});
	}
};

export const getOneProductAction = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_ONE_PRODUCT_REQUEST,
		});
		const { data } = await getOneProduct(id);
		dispatch({
			type: GET_ONE_PRODUCT_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		dispatch({
			type: GET_ONE_PRODUCT_FAIL,
			payload: error.message,
		});
	}
};
