"use client"; 

import React, { useState } from "react";

const MealPlanner = () => {
	const [foodPreferences, setFoodPreferences] = useState("");
	const [mealPlan, setMealPlan] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFoodPreferences(e.target.value);
		setError(""); 
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setMealPlan(null); 
		setError(""); 

		try {
			const response = await fetch("/api/generate-meal-plan", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ foodPreferences }),
			});

			if (response.ok) {
				const data = await response.json();
				setMealPlan(data.mealPlan);
			} else {
				const errorResponse = await response.json();
				setError(errorResponse.error || "Error generating meal plan");
			}
		} catch (error) {
			setError(
				"An error occurred while generating the meal plan. Please try again."
			);
		}

		setLoading(false);
	};

	return (
		<div className="container mx-auto py-20">
			<h1 className="text-4xl font-bold mb-8">Meal Planner</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<p>
					Input your meal preferences and get a personalized meal plan for the
					week.
				</p>

				<form
					onSubmit={handleSubmit}
					className="mt-4"
				>
					<input
						type="text"
						value={foodPreferences}
						onChange={handleInputChange}
						placeholder="Enter your preferred foods (e.g., chicken, broccoli)"
						className="w-full p-4 mb-4 border rounded-lg"
						required
					/>
					<button
						type="submit"
						className="bg-deepRed text-white px-6 py-2 rounded-full"
						disabled={loading}
					>
						{loading ? "Generating..." : "Generate Meal Plan"}
					</button>
				</form>

				{/* Error Message */}
				{error && <div className="mt-4 text-red-500">{error}</div>}

				{/* Display the meal plan if available */}
				{mealPlan && (
					<div className="mt-8">
						<h2 className="text-2xl font-semibold mb-4">
							Your Weekly Meal Plan
						</h2>
						<pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
							{mealPlan}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default MealPlanner;
