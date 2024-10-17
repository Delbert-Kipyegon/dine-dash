import BackgroundSolution from "./components/BackgroundSolution";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FutureTrends from "./components/FutureTrends";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<BackgroundSolution />
			<FutureTrends />
			<Team />
			<Footer />
		</>
	);
};

export default HomePage;
