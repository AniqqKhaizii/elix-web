import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Solutions from "./_components/Solutions";
import Company from "./_components/Company";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import './globals.css';
export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Hero />
        <Solutions />  
        <Company />  
        <ScrollToTopButton />
    </div>
  );
}
