import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 w-full px-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container relative z-10 grid justify-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-10 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Handwritten Digit Recognition
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl">
                A machine learning project that recognizes handwritten digits
                using the MNIST dataset and Next.js.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
              <Link
                href="/predict"
                className="inline-flex h-14 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800"
              >
                Try the Demo
              </Link>
              <Link
                href="#about"
                className="inline-flex h-14 items-center justify-center rounded-md  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-2 shadow-lg md:h-[400px] md:w-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="MNIST dataset visualization"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
    </section>
  );
}
export default Hero;
