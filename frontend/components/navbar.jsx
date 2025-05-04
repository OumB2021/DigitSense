import Image from "next/image";

function Navbar() {
  return (
    <div className="absolute top-0 w-full  z-50 border-b-[1px] border-zinc-300 p-4">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <Image src="/icon.png" height={40} width={40} alt="icon" />
        <h1 className="text-lg md:text-4xl font-semibold text-center text-gray-800">
          ML Digit <span className="text-[#FB9696] font-bold">Recognition</span>
        </h1>
      </div>
    </div>
  );
}
export default Navbar;
