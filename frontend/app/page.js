import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <Header />
      <p className="text-sm md:text-lg text-center text-zinc-500 max-w-[500px] p-4 border-b-[1px] border-zinc-300">
        <strong>ML Digit Recognition</strong> is application allows users to
        draw handwritten digits directly on a canvas and receive real-time
        predictions using a trained machine learning model.
      </p>
    </div>
  );
}
