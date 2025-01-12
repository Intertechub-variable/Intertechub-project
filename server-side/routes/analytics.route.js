import express from "express";
import { getAnalyticsData } from "../controllers/analytics.controller.js";


const analyticsRoute = express.Router();

analyticsRoute.get("/", async (req, res) => {
	try {
		const analyticsData = await getAnalyticsData();

		res.json({
			analyticsData,
		});
	} catch (error) {
		console.log("Error in analytics route", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
});

export default analyticsRoute