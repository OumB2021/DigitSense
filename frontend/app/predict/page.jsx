import DigitCanvas from "../../components/canvas";

function page() {
  return (
    <div className="flex flex-col items-center justify-center  w-full px-10">
      <section id="demo" className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Try It Yourself
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
                Draw a digit from 0-9 on the canvas below and our model will
                predict what number you've drawn.
              </p>
            </div>
            <DigitCanvas />
            <div className="text-center text-sm text-gray-500">
              <p>
                The canvas uses HTML5 Canvas API and the predictions are made
                using a machine learning model trained on the MNIST dataset.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default page;
