import axios from "axios";

const baseUrl = process.env.REACT_APP_APIURL ?? "";

const axiosInstance = axios.create({
	baseURL: baseUrl,
	responseType: "json",
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		console.log(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			localStorage.removeItem('login')
			window.location.href = '/auth';
		}
		console.log(error);
	}
);

export default axiosInstance;
