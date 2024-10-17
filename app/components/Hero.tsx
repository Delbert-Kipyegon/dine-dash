import React from "react";
import Image from "next/image"; 

const Hero = () => {
	return (
		<section className="relative bg-highlightYellow min-h-screen flex flex-row items-center justify-center text-center overflow-hidden">
			{/* Hamburger image on the left side */}
			<div className="absolute left-40 top-1/2 transform -translate-y-1/2 z-0 flex items-center">
				<Image
					src="/hamburger-image.png"
					alt="Hamburger"
					layout="intrinsic"
					width={500}
					height={500}
					className="animate-bounce-slow"
				/>
			</div>

			{/* Text Content */}
			<div className="z-10 max-w-2xl">
				<h1 className="text-deepRed text-5xl md:text-6xl font-bold animate-fade-in">
					Welcome to DineDash
				</h1>
				<p className="text-foreground text-xl md:text-2xl mt-4 animate-fade-in delay-500">
					Leverage AI to plan your meals and eat smart.
				</p>
				<button
					className="mt-6 bg-cream text-deepRed font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-deepRed hover:text-highlightYellow transition duration-300 animate-slide-up"
					style={{ transition: "transform 0.3s ease-in-out" }} 
				>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Hero;
