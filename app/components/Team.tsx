const Team = () => {
	return (
		<section
			id="team"
			className="py-20 bg-white"
		>
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="border rounded-lg p-6">
						<img
							src="/team-member1.jpg"
							alt="Member 1"
							className="rounded-full w-32 mx-auto"
						/>
						<h3 className="mt-4 text-xl font-bold">Jane Doe</h3>
						<p>CEO & Founder</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
