function About() {
  return (
    <section
      id="about"
      className="border-t-[1px] border-zinc-300 bg-zinc-50 py-24 md:py-32 w-full px-10"
    >
      <div className="container mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About the Project
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-zinc-500">
            Learn more about the technical details behind this machine learning
            project.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">The MNIST Dataset</h3>
            <p className="mt-2 text-zinc-500">
              The MNIST database (Modified National Institute of Standards and
              Technology database) is a large database of handwritten digits
              that is commonly used for training various image processing
              systems. The database contains 60,000 training images and 10,000
              testing images.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">The Model</h3>
            <p className="mt-2 text-zinc-500">
              We've trained a convolutional neural network (CNN) on the MNIST
              dataset. The model architecture includes convolutional layers, max
              pooling, and fully connected layers. It achieves over 98% accuracy
              on the test set.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">The Tech Stack</h3>
            <p className="mt-2 text-zinc-500">
              This project uses Next.js for the frontend, with React for UI
              components and Tailwind CSS for styling. The machine learning
              model is integrated into the application using TensorFlow.js,
              allowing for client-side inference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
