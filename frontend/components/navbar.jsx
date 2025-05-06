import Link from "next/link";
import { Github } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-[1px] border-zinc-300 bg-white/60 backdrop-blur-sm px-10">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto ">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">DigitSense</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="https://github.com"
            className="flex items-center gap-1 rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
