import React from "react";
import { FaUtensils, FaBrain, FaCog } from "react-icons/fa"; // Importing icons from react-icons

const Features = () => {
	return (
		<section
			id="features"
			className="py-20 bg-cream text-deepRed"
		>
			<div className="container mx-auto text-center px-6">
				<h2 className="text-4xl font-bold mb-12">Why Choose DineDash?</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					
					<div className="p-6 border-2 border-highlightYellow rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
						<FaUtensils className="text-4xl text-highlightYellow mb-4 transition-colors duration-300" />
						<h3 className="text-3xl font-semibold mb-4">Personalized Meals</h3>
						<p className="text-lg">
							Get meal plans based on your dietary preferences and restrictions.
						</p>
					</div>

					
					<div className="p-6 border-2 border-highlightYellow rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
						<FaBrain className="text-4xl text-highlightYellow mb-4 transition-colors duration-300" />
						<h3 className="text-3xl font-semibold mb-4">AI-Powered</h3>
						<p className="text-lg">
							Let AI help you plan balanced meals for the entire week.
						</p>
					</div>

				
					<div className="p-6 border-2 border-highlightYellow rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
						<FaCog className="text-4xl text-highlightYellow mb-4 transition-colors duration-300" />
						<h3 className="text-3xl font-semibold mb-4">Flexible and Easy</h3>
						<p className="text-lg">
							Modify meals and get suggestions based on time, diet, or cuisine.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
