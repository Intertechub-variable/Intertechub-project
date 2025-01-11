import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import { BASE_URL } from "../utils";


export const useProductStore = create((set) => ({
	projects: [],
	loading: false,
	current_amount:0,

	setProjects: (projects) => set({ projects }),
    
	createProject: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post(`/projects/create`, productData);
			// set((prevState) => ({
			// 	projects: [...prevState.projects, res.data],
			// 	loading: false,
			// }));
			
			toast.success("Product created successfully")
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get(`/projects/approved`,{headers:{
					"Content-Type":"application/json",
			}	
				});
			console.log(response.data)
			set({ projects: response.data, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch all projects", loading: false });
			console.log(error.response)
			// toast.error(error.response.data.error || "Failed to fetch all products");
		}
	},
    
	updateProject: async (productId, updatedData)=>{
		set({ loading: true });
		try {
			const res = await axios.put(`/projects/update/${productId}`, updatedData,{headers:{"Content-Type":"application/json"}, withCredentials:true});
			 console.log(res.data);

			 set((prevState)=>{
	         
			    const updatedProjects = prevState.projects.map((project)=>{
					if(project._id === productId){
						return{
							...project,
							...updatedData
						}
					}
					return project;
				})
				 return {
					 projects:updatedProjects,
					 loading:false,

				 }
			 })
            
			// set((prevState) => ({
			// 	projects: [...prevState.projects, res.data],
			// 	loading: false,
			// }));
			toast.success("Product updated successfully")
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`/projects/${productId}`);
			set((prevProducts) => ({
				projects: prevProducts.projects.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete product");
		}
	},
    
}
));