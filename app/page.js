import Hero from "./_components/Hero";
import Solutions from "./_components/Solutions";
import Company from "./_components/Company";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import Chatbot from "./_components/Chatbot";
import "./globals.css";
export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<Solutions />
			<Company />
			<ScrollToTopButton />
			<Chatbot />
		</div>
	);
}
