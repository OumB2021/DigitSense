import DigitCanvas from "@/components/canvas";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-10">
      <p className="text-sm  text-center text-zinc-500 max-w-[500px] p-4 border-b-[1px] border-zinc-300">
        <strong>ML Digit Recognition</strong> is application allows users to
        draw handwritten digits directly on a canvas and receive real-time
        predictions using a trained machine learning model.
      </p>
      <DigitCanvas />
    </div>
  );
}
