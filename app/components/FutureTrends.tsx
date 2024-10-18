import React from "react";
import { FaSms, FaUserCog, FaCalculator, FaBell } from "react-icons/fa";

const FutureTrends = () => {
	return (
		<section
			id="future"
			className="py-20 bg-highlightYellow text-deepRed"
		>
			<div className="container mx-auto text-center px-6">
				<h2 className="text-4xl font-bold mb-12">What&apos;s Next?</h2>
				<p className="text-lg leading-relaxed mb-12">
					The future of meal planning is AI-driven personalization. We aim to
					integrate more dietary trends, real-time grocery shopping options, and
					improve recipe suggestions with enhanced user feedback. Additionally,
					DineDash will introduce SMS notifications to make your experience more
					seamless.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* SMS Notifications */}
					<div className="bg-white text-deepRed p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
						<FaSms className="text-5xl text-highlightYellow mb-4" />
						<h3 className="text-2xl font-semibold mb-4">SMS Notifications</h3>
						<p className="text-lg">
							Get real-time SMS updates about your meals, upcoming plans, and
							nutrition suggestions, ensuring you never miss a healthy meal.
						</p>
					</div>

					{/* Enhanced Personalization */}
					<div className="bg-white text-deepRed p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
						<FaUserCog className="text-5xl text-highlightYellow mb-4" />
						<h3 className="text-2xl font-semibold mb-4">
							Enhanced Personalization
						</h3>
						<p className="text-lg">
							DineDash will refine meal suggestions even further based on your
							habits, preferences, and ongoing feedback for an optimal
							experience.
						</p>
					</div>

					{/* Calories Calculation */}
					<div className="bg-white text-deepRed p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
						<FaCalculator className="text-5xl text-highlightYellow mb-4" />
						<h3 className="text-2xl font-semibold mb-4">
							Calories Calculation
						</h3>
						<p className="text-lg">
							Easily track your daily calorie intake with each meal. Our system
							will calculate and provide personalized insights on your health
							goals.
						</p>
					</div>

					{/* Meal Notifications */}
					<div className="bg-white text-deepRed p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
						<FaBell className="text-5xl text-highlightYellow mb-4" />
						<h3 className="text-2xl font-semibold mb-4">Meal Notifications</h3>
						<p className="text-lg">
							Receive timely notifications for meal preparation and reminders to
							help you stick to your healthy eating schedule.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FutureTrends;
