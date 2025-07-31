import Image from "next/image";
import Shape from "../public/assets/images/hero-shape.svg";
import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSolution />
    </div>
  );
}
