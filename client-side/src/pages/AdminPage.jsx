import {useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnalyticsTab from "../components/AnalyticsTab";
import { BarChart, ProjectorIcon, ThumbsUpIcon } from 'lucide-react'
import ApproveProjects from "./ApproveProjects";
import { useProductStore } from "../context/useProductStore";
import TotalProjects from "../components/TotalProjects";

const tabs = [
	{ id: "approve", label: "Aprove Projects", icon: ThumbsUpIcon },
	{ id: "projects", label: "Projects", icon: ProjectorIcon },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
		const [activeTab, setActiveTab] = useState("approve");
	
		const {projects } = useProductStore();

	return (
		<div className='min-h-screen relative overflow-hidden'>
			<div className='relative z-10 container mx-auto px-4 py-16'>
				<motion.h1
					className='text-4xl font-bold mb-8 text-gray-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
								activeTab === tab.id
									? "bg-black text-white"
									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
							}`}
						>
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</button>
					))}
				</div>

				{activeTab === "approve" && <ApproveProjects />}
				{activeTab === "projects" && <TotalProjects />} 
				{activeTab === "analytics" && <AnalyticsTab />}
			</div>
		</div>
	);
};
export default AdminPage;