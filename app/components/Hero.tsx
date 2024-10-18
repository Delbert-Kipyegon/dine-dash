import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="py-10 relative bg-highlightYellow min-h-screen flex flex-col md:flex-row items-center justify-between md:justify-center text-center md:text-left overflow-hidden px-10">
			{/* Hamburger image on the left side for larger screens */}
			<div className="">
				<Image
					src="/hamburger-image.png" // Replace with actual image path
					alt="Hamburger"
					layout="intrinsic"
					width={400} // Adjusted for better mobile scaling
					height={400}
					className="animate-bounce-slow"
				/>
			</div>

			{/* Text Content */}
			<div className="">
				<h1 className="text-deepRed text-4xl md:text-6xl font-bold animate-fade-in">
					Welcome to DineDash
				</h1>
				<p className="text-foreground text-lg md:text-2xl mt-4 animate-fade-in delay-500 mb-10">
					Leverage AI to plan your meals and eat smart.
				</p>
				<a
					className="bg-cream text-deepRed font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-deepRed hover:text-highlightYellow transition duration-300 animate-slide-up"
					href="/meal-planner"
				>
					Get Started
				</a>
			</div>
		</section>
	);
};

export default Hero;
