import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import { BASE_URL } from "../utils";


export const useUserStore = create((set, get) => ({
	user:  localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
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
			 localStorage.setItem("userInfo", JSON.stringify(res.data));
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
			localStorage.setItem("userInfo", JSON.stringify(res.data));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	logout: async () => {
		try {
			await axios.post(`${BASE_URL}/api/auth/logout`);
			set({ user: null });
			 localStorage.removeItem("userInfo");
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred during logout");
		}
	},
}));


