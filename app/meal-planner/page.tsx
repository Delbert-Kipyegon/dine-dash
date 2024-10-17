import React from "react";

const MealPlanner = () => {
	return (
		<div className="container mx-auto py-20">
			<h1 className="text-4xl font-bold mb-8">Meal Planner</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<p>
					Input your meal preferences and get a personalized meal plan for the
					week.
				</p>
				{/* Add form inputs for time, diet, food type */}
			</div>
		</div>
	);
};

export default MealPlanner;
