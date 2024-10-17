const BackgroundSolution = () => {
	return (
		<section
			id="background"
			className="py-20 bg-cream text-deepRed"
		>
			<div className="container mx-auto text-center px-6">
				<h2 className="text-4xl font-bold mb-8 text-deepRed">My Solution</h2>
				<p className="text-lg leading-relaxed mb-8">
					DineDash combines AI and nutrition expertise to create meal plans that
					help you stay on track with your dietary needs. Whether you're
					managing allergies or following a special diet, DineDash has you
					covered.
					<br />
					<br />I created DineDash to help save time for those who often
					struggle to decide what to eat, especially when dining alone. With
					DineDash, planning meals is now seamless, allowing you to focus on
					what really matters.
				</p>

				{/* Personal Story */}
				<div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-highlightYellow text-left">
					<h3 className="text-2xl font-semibold mb-4 text-highlightYellow">
						My Story: A Solo Student’s Journey
					</h3>
					<p className="text-lg leading-relaxed text-deepRed">
						As a solo student living away from home, I often found myself
						overwhelmed with schoolwork and struggled to plan my meals. I would
						spend too much time thinking about what to eat, often settling for
						unhealthy choices or skipping meals altogether.
						<br />
						<br />
						After creating and using DineDash, everything changed. With
						personalized meal plans tailored to my preferences and diet, I could
						focus more on my studies while enjoying balanced, healthy meals
						every day. DineDash saved me time and became the perfect companion
						to my busy academic life.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BackgroundSolution;
