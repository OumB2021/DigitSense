import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-zinc-50 bg-zinc-900 py-6 w-full md:py-10">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-zinc-200">
          &copy; {new Date().getFullYear()} DigitSense. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className=" flex items-center justify-center gap-1 text-sm text-zinc-400 hover:text-zinc-200"
          >
            <Github size={15} />
            Github
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center gap-1 text-sm text-zinc-400 hover:text-zinc-200"
          >
            <Linkedin size={15} />
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
