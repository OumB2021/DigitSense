function Features() {
  return (
    <section
      id="features"
      className="border-t-[1px] border-zinc-300 bg-gray-50 py-20"
    >
      <div className="container space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            Explore the capabilities of our machine learning model trained on
            the MNIST dataset.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-gray-100 p-3 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">MNIST Dataset</h3>
            <p className="mt-2 text-gray-500">
              Trained on the classic MNIST dataset containing 70,000 handwritten
              digit images.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-gray-100 p-3 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M21 8v13H3V8" />
                <path d="M1 3h22v5H1z" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Interactive Canvas</h3>
            <p className="mt-2 text-gray-500">
              Draw digits on an interactive canvas and get real-time predictions
              from the model.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-gray-100 p-3 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">High Accuracy</h3>
            <p className="mt-2 text-gray-500">
              Our model achieves over 98% accuracy on the MNIST test set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
