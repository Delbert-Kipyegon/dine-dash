import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Import local fonts
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

// Metadata for your project
export const metadata: Metadata = {
	title: "Dine Dash",
	description: "Plan Your Meals Correctly",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col justify-between`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
