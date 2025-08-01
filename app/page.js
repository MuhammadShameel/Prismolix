import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSolution />
      <Services />
      <Testimonial />
    </div>
  );
}
