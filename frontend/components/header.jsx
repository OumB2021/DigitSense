import Image from "next/image";
import DigitCanvas from "./canvas";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image src="/icon.png" height={60} width={60} alt="icon" />
      <h1 className="text-lg md:text-4xl font-semibold text-center text-gray-800">
        ML Digit <span className="text-[#FB9696] font-bold">Recognition</span>
      </h1>
      <DigitCanvas />
    </div>
  );
}
export default Header;
