import { Github } from "lucide-react";
import Link from "next/link";

function Cta() {
  return (
    <section className="border-t-[1px] border-zinc-300 bg-zinc-100 py-24 md:py-32 w-full px-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-zinc-900 p-8 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Ready to explore more?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-gray-300">
          Check out the source code on GitHub to learn how we built this project
          and how you can implement your own machine learning models with
          Next.js.
        </p>
        <div className="mt-8">
          <Link
            href="/predict"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100"
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Cta;
