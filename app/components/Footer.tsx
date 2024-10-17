import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-deepRed text-white py-12">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
				<div>
					<h3 className="text-xl font-bold mb-4">About DineDash</h3>
					<p className="text-sm leading-relaxed">
						DineDash is an AI-powered meal planning platform designed to make
						healthy eating easier by personalizing meal plans based on dietary
						needs, preferences, and goals.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-bold mb-4">Quick Links</h3>
					<ul className="text-sm space-y-2">
						<li>
							<a
								href="/"
								className="hover:text-highlightYellow"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/"
								className="hover:text-highlightYellow"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="/"
								className="hover:text-highlightYellow"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="/"
								className="hover:text-highlightYellow"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="/"
								className="hover:text-highlightYellow"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="text-xl font-bold mb-4">Contact Us</h3>
					<ul className="text-sm space-y-2">
						<li>Email: support@dinedash.com</li>
						<li>Phone: +123 456 7890</li>
						<li>Address: 123 DineDash Lane, Food City, Nairobi</li>
					</ul>
				</div>
			</div>

			{/* Social Links and Copyright */}
			<div className="mt-12 border-t border-cream pt-8">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
					<div>© 2024 DineDash. All Rights Reserved.</div>

					{/* Social Links */}
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="https://github.com/Delbert-Kipyegon"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-highlightYellow transition-colors"
						>
							<FaGithub className="text-2xl" />
						</a>
						<a
							href="https://twitter.com/iamDelbert19"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-highlightYellow transition-colors"
						>
							<FaTwitter className="text-2xl" />
						</a>
						<a
							href="https://www.linkedin.com/in/delbert-kipyegon"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-highlightYellow transition-colors"
						>
							<FaLinkedin className="text-2xl" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
