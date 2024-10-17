const Features = () => {
	return (
		<section
			id="features"
			className="py-20 bg-white"
		>
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-semibold mb-8">Why Choose DineDash?</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<div className="p-6 border rounded-lg">
						<h3 className="text-2xl font-bold">Personalized Meals</h3>
						<p>
							Get meal plans based on your dietary preferences and restrictions.
						</p>
					</div>
					<div className="p-6 border rounded-lg">
						<h3 className="text-2xl font-bold">AI-Powered</h3>
						<p>Let AI help you plan balanced meals for the entire week.</p>
					</div>
					<div className="p-6 border rounded-lg">
						<h3 className="text-2xl font-bold">Flexible and Easy</h3>
						<p>
							Modify meals and get suggestions based on time, diet, or cuisine.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
