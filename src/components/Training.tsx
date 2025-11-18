import React from "react";
import Image from "next/image";
import Img1 from "../assets/training1.jpg";
import Img2 from "../assets/training2.jpg";
import Img3 from "../assets/training3.jpg";

function Training() {
  return (
    <div className="px-4">
      <div className="container mx-auto pt-3">
        <h2 className="text-center font-bold text-black dark:text-white text-3xl">
          Training programs we offer for you
        </h2>
        <p className="text-center font-semibold text-[#8a8a8a] dark:text-white text-xl">
          The training programs we offer are designed to provide the best results.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mb-4">
          
          <div className="relative w-80 h-64 overflow-hidden rounded-xl group cursor-pointer">
            <Image src={Img1} alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 duration-300"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">Booty Camp</h2>
          </div>

          <div className="relative w-80 h-64 overflow-hidden rounded-xl group cursor-pointer">
            <Image src={Img2} alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 duration-300"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">Sync & Flow</h2>
          </div>

          <div className="relative w-80 h-64 overflow-hidden rounded-xl group cursor-pointer">
            <Image src={Img3} alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 duration-300"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">Functional Aesthetics</h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Training;
