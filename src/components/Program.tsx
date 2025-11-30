import React from "react";
import Image from "next/image";
import Img1 from "../assets/program1.jpg";
import Img2 from "../assets/program2.jpg";
import Img3 from "../assets/program3.jpg";
import Img4 from "../assets/program4.jpg";
import Link from "next/link";

function Program() {
  return (
    <>
      <div className="w-full py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <h2 className="text-black text-3xl font-bold text-center md:text-left dark:text-white">
              Our Program is <br /> designed for you
            </h2>

            <p className="text-xl font-semibold text-center md:text-left">
              we understand that each individual has unique needs and goals,
              which is why we are committed to providing you with customized and
              beneficial experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[Img1, Img2, Img3, Img4].map((img, i) => (
              <div key={i} className="p-2">
                <div
                  className="card bg-base-100 shadow-md w-full h-full 
      hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer"
                >
                  <figure className="h-48 w-full overflow-hidden">
                    <Image
                      src={img}
                      alt="program image"
                      className="object-cover h-full w-full transition-transform duration-300 hover:scale-110"
                      loading="eager"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title">
                      {i === 0 && "Personal Trainer"}
                      {i === 1 && "Outdoor Classes"}
                      {i === 2 && "Digital Coaching"}
                      {i === 3 && "Group Training"}
                    </h2>

                    <div className="card-actions justify-end">
                      <Link href="/contact">
                    
                      <button className="btn btn-outline">Explore</button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
