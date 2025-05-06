import { CircleCheck, File, Paintbrush, PaintBucket } from "lucide-react";

function Features() {
  return (
    <section
      id="features"
      className="border-t-[1px] border-zinc-300 bg-zinc-100 py-24 md:py-32 w-full px-10"
    >
      <div className="container space-y-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-zinc-500">
            Explore the capabilities of our machine learning model trained on
            the MNIST dataset.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-zinc-100 p-3 w-12 h-12 flex items-center justify-center">
              <File className="text-zinc-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold">MNIST Dataset</h3>
            <p className="mt-2 text-zinc-500">
              Trained on the classic MNIST dataset containing 70,000 handwritten
              digit images.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-zinc-100 p-3 w-12 h-12 flex items-center justify-center">
              <Paintbrush className="text-zinc-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold">Interactive Canvas</h3>
            <p className="mt-2 text-zinc-500">
              Draw digits on an interactive canvas and get real-time predictions
              from the model.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-zinc-100 p-3 w-12 h-12 flex items-center justify-center">
              <CircleCheck className="text-zinc-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold">High Accuracy</h3>
            <p className="mt-2 text-zinc-500">
              Our model achieves over 98% accuracy on the MNIST test set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
