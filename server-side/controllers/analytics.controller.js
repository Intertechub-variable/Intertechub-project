
import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export const getAnalyticsData = async () => {
	const totalUsers = await User.countDocuments();
	const totalProducts = await Project.countDocuments();

	
	return {
		users: totalUsers,
		products: totalProducts,
	};
};



