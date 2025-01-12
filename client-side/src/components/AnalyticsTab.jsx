import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Package } from "lucide-react";
import axios from "axios";

const AnalyticsTab = () => {
	const [analyticsData, setAnalyticsData] = useState({
		users: 0,
		products: 0,
	});
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await axios.get("/api/analytics");
				setAnalyticsData(response.data.analyticsData);
			} catch (error) {
				console.error("Error fetching analytics data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAnalyticsData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='flex justify-center px-4 sm:px-6 lg:px-8'>
			<div className='flex justify-center sm:flex-row gap-10 mb-8'>
				<AnalyticsCard
					title='Total Users'
					value={analyticsData?.users}
					icon={Users}
					color='from-emerald-500 to-teal-700'
				/>
				<AnalyticsCard
					title='Total Projects'
					value={analyticsData?.products}
					icon={Package}
					color='from-emerald-500 to-green-700'
				/>
			</div>
		</div>
	);
};
export default AnalyticsTab;

const AnalyticsCard = ({ title, value, icon: Icon, color }) => (
	<motion.div
		className={` bg-gray-800 rounded-lg p-6 shadow-lg overflow-hidden relative ${color}`}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div className='flex items-center'>
			<div className='z-10 flex flex-col items-center'>
				<p className='text-emerald-300 text-sm mb-1 font-semibold'>{title}</p>
				<h3 className='text-white text-3xl font-bold'>{value}</h3>
			</div>
		</div>
		<div className='absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900 opacity-30' />
		<div className='absolute -bottom-4 -right-4 text-emerald-800 opacity-50'>
			<Icon className='h-32 w-32' />
		</div>
	</motion.div>
);