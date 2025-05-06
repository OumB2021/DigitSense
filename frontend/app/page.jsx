import About from "../components/about";
import Cta from "../components/cta";
import Features from "../components/features";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <Hero />
      <Features />
      <About />
      <Cta />
    </div>
  );
}
