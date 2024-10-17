import Image from "next/image"; 
import { FaGithub } from "react-icons/fa"; 

const Team = () => {
	return (
		<section
			id="team"
			className="py-20 bg-cream text-deepRed"
		>
			<div className="container mx-auto text-center px-6">
				<h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
				<div className="grid grid-cols-1 gap-8 justify-center">
					
					<div className="text-center">
						<Image
							src="/me.jpg" 
							alt="Delbert Kipyegon"
							width={300} 
							height={200}
							className="rounded-full mx-auto"
						/>
						<h3 className="mt-6 text-2xl font-bold">Delbert Kipyegon</h3>
						<p className="text-lg">Software Engineer & Founder</p>

						{/* Social Links */}
						<div className="mt-4 flex justify-center space-x-4">
							<a
								href="https://github.com/Delbert-Kipyegon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-highlightYellow hover:text-deepRed transition-colors"
							>
								<FaGithub className="text-3xl" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
