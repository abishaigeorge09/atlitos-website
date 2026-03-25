import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AICoach from "@/components/AICoach";
import Competitive from "@/components/Competitive";
import Market from "@/components/Market";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="glow-line max-w-xl mx-auto" />
        <Problem />
        <Solution />
        <div className="glow-line max-w-xl mx-auto" />
        <AICoach />
        <Competitive />
        <div className="glow-line max-w-xl mx-auto" />
        <Market />
        <Team />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
