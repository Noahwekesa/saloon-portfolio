import Link from "next/link";
import { Spotlight } from "../components/ui/Spotlight";
import SliderOne from "../components/ui/Slider";
import WorkingHours from "./WorkingHours";

export default function Home() {
  return (
    <div>
      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          WELCOME TO
          <br /> LAURA SALOON
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Your favourite hair stylist
        </p>
        <Link
          href={"/"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          BOOK NOW
        </Link>
        <div className="w-full" pt-20>
          <SliderOne />
        </div>
        <div>
          <WorkingHours />
        </div>
      </div>
    </div>
  );
}
