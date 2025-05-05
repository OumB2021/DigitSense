import DigitCanvas from "@/components/canvas";
import Features from "@/components/features";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-10">
      <Hero />
      <Features />
    </div>
  );
}
