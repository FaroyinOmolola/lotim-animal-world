import { SHA512 } from "crypto-js";
import axios from "axios";

//created axios instance and interceptors
const productInstance = axios.create({
	baseURL: "http://client-end.herokuapp.com/product/",
});
const userInstance = axios.create({
	baseURL: "http://client-end.herokuapp.com/user",
});
const adminInstance = axios.create({
	baseURL: "https://lotim-animal-world.herokuapp.com/admin",
});

adminInstance.interceptors.request.use((config) => {
	const timestamp = Date.now();
	config.headers.timestamp = timestamp;
	config.headers.api_key = hashKey(
		timestamp,
		process.env.REACT_APP_ADMIN_KEY
	);
	const data = JSON.parse(localStorage.getItem("adminVerified"));
	config.headers.Authorization = "Bearer " + data?.data?.token;
	return config;
});

adminInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 403 || error.response?.status === 401) {
			window.location.pathname = "/adminLogin";
			localStorage.clear();
		}
	}
);

userInstance.interceptors.request.use((config) => {
	const timestamp = Date.now();

	config.headers.timestamp = timestamp;
	config.headers.api_key = hashKey(
		timestamp,
		process.env.REACT_APP_CLIENT_KEY
	);
	const data = JSON.parse(localStorage.getItem("userInfo"));
	config.headers.Authorization = "Bearer " + data?.data?.credentials?.token;
	return config;
});

productInstance.interceptors.request.use((config) => {
	const timestamp = Date.now();

	config.headers.timestamp = timestamp;
	config.headers.api_key = hashKey(
		timestamp,
		process.env.REACT_APP_CLIENT_KEY
	);
	return config;
});

//user axios call
export const sendEnquiry = (body) => {
	return userInstance.post("/enquiry", body);
};
export const sendBooking = (body) => {
	return userInstance.post("/booking", body);
};
export const register = (body) => {
	return userInstance.post("/create", body);
};
export const signin = (body) => {
	return userInstance.post("/login", body);
};
export const order = (body) => {
	return userInstance.post("/order", body);
};

//product axios call
export const getProduct = () => {
	return productInstance.get("/products");
};
export const getOneProduct = (id) => {
	return productInstance.get(`product/${id}`);
};

//admin axios call
export const adminLogin = (body) => {
	return adminInstance.post("/login", body);
};
export const adminVerification = (body) => {
	return adminInstance.post("/verifyotp", body);
};
export const adminAddProduct = (body) => {
	return adminInstance.post("/product", body);
};
export const adminUploadFile = (body) => {
	return new Promise((resolve, reject) => {
		resolve({ data: { status: true, data: [{ _id: "i" }] }, status: true });
	});
	/*const fd = new FormData();
	fd.append("", body);

	return adminInstance.post("/file/uploadAWS", fd);*/
};

export const adminGetFile = async (fileId) => {
	try {
		return adminInstance.get(`/fileAWS/${fileId}`);
		/*if (response.status) {
			return URL.createObjectURL(
				new Blob([new Uint8Array(response.data?.data?.Body.data)], {
					type: response.data?.data?.ContentType,
				})
			);
		}*/
	} catch (err) {
		console.log(err);
	}
};

export const getEnquiry = () => {
	return adminInstance.get("/enquiries");
};
export const getOneEnquiry = (id) => {
	return adminInstance.get(`/enquiry/${id}`);
};
export const getBooking = () => {
	return adminInstance.get("/bookings");
};
export const adminGetProduct = () => {
	return adminInstance.get("/product");
};
export const getOneBooking = (id) => {
	return adminInstance.get(`booking/${id}`);
};
export const adminGetOneProduct = (id) => {
	return adminInstance.get(`product/${id}`);
};

//encryption
function hashKey(timeStamp, key) {
	let hash = SHA512(key + "||" + timeStamp);
	return hash.toString();
}
