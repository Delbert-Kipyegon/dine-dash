"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-highlightYellow text-[#84201A] font-baloo p-4 fixed w-full top-0 z-50 shadow-lg">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold flex items-center">
					<a
						href="/"
						className=" transition duration-200 cursor-pointer"
					>
						DineDash
					</a>
				</div>

				{/* Desktop Navigation Links */}
				<ul className="hidden md:flex space-x-6 text-lg">
					<li>
						<a
							href="#features"
							className="hover:text-cream transition duration-200"
						>
							Features
						</a>
					</li>
					<li>
						<a
							href="#background"
							className="hover:text-cream transition duration-200"
						>
							Background
						</a>
					</li>
					<li>
						<a
							href="#future"
							className="hover:text-cream transition duration-200"
						>
							Future
						</a>
					</li>
					<li>
						<a
							href="#team"
							className="hover:text-cream transition duration-200"
						>
							Team
						</a>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-2xl focus:outline-none"
					onClick={toggleMenu}
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<ul className="absolute top-16 left-0 w-full bg-[#FDECD2] text-center space-y-4 py-4 md:hidden shadow-lg">
						<li>
							<a
								href="#features"
								className="block text-lg hover:text-cream"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#background"
								className="block text-lg hover:text-cream"
							>
								Background
							</a>
						</li>
						<li>
							<a
								href="#future"
								className="block text-lg hover:text-cream"
							>
								Future
							</a>
						</li>
						<li>
							<a
								href="#team"
								className="block text-lg hover:text-cream"
							>
								Team
							</a>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
