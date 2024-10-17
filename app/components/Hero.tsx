const Hero = () => {
	return (
		<section
			className="bg-cover bg-center h-screen flex items-center justify-center"
			style={{ backgroundImage: "url(/hero-bg.jpg)" }}
		>
			<div className="text-center">
				<h1 className="text-5xl font-bold text-white">
					AI-powered Meal Planner
				</h1>
				<p className="text-xl mt-4 text-gray-100">
					Personalized meal plans based on your preferences.
				</p>
				<button className="mt-6 bg-yellow-500 px-8 py-3 rounded-full text-lg font-semibold">
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Hero;
