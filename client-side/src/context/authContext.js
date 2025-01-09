import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import { BASE_URL } from "../utils";


export const useUserStore = create((set, get) => ({
	user: null,
	loading: false,
	checkingAuth: true,

	signup: async ({ name, email, password, confirmPassword }) => {
		set({ loading: true });

		if (password !== confirmPassword) {
			set({ loading: false });
			return toast.error("Passwords do not match");
		}
        const formData = {
			username:name,
			email,
			password
		}
		try {
			const res = await axios.post(`${BASE_URL}/api/auth/signup`, formData,{withCredentials:true},{headers:{"Content-Type":"application/json"}});
			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	login: async (email, password) => {
		set({ loading: true });
         const formData = {
			email,
			password
		 }
		try {
			const res = await axios.post(`${BASE_URL}/api/auth/login`,formData,{withCredentials:true},{headers:{"Content-Type":"application/json"}});
			 console.log(res)
			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	logout: async () => {
		try {
			await axios.post(`${BASE_URL}/api/auth/logout`);
			set({ user: null });
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred during logout");
		}
	},

	// checkAuth: async () => {
	// 	set({ checkingAuth: true });
	// 	try {
	// 		const response = await axios.get("/auth/profile");
	// 		set({ user: response.data, checkingAuth: false });
	// 	} catch (error) {
	// 		console.log(error.message);
	// 		set({ checkingAuth: false, user: null });
	// 	}
	// },

	// refreshToken: async () => {
	// 	// Prevent multiple simultaneous refresh attempts
	// 	if (get().checkingAuth) return;

	// 	set({ checkingAuth: true });
	// 	try {
	// 		const response = await axios.post("/auth/refresh-token");
	// 		set({ checkingAuth: false });
	// 		return response.data;
	// 	} catch (error) {
	// 		set({ user: null, checkingAuth: false });
	// 		throw error;
	// 	}
	// },
}));

// TODO: Implement the axios interceptors for refreshing access token

// Axios interceptor for token refresh
let refreshPromise = null;

// axios.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const originalRequest = error.config;
// 		if (error.response?.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;

// 			try {
// 				// If a refresh is already in progress, wait for it to complete
// 				if (refreshPromise) {
// 					await refreshPromise;
// 					return axios(originalRequest);
// 				}
// 				// refreshPromise = useUserStore.getState().refreshToken();
// 				await refreshPromise;
// 				refreshPromise = null;

// 				return axios(originalRequest);
// 			} catch (refreshError) {
// 				// If refresh fails, redirect to login or handle as needed
// 				useUserStore.getState().logout();
// 				return Promise.reject(refreshError);
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );