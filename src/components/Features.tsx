import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BiStopwatch } from "react-icons/bi";

function Features() {
  return (
    <>
      <div className="bg-mainblack ">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="">
              <h2 className="text-2xl text-center text-white md:text-left dark:text-white font-bold mt-2">
                Best Features
                <br />
                we offer for you
              </h2>
            </div>
            <div>
              <p className="text-xl text-center md:text-left text-[#9596a1] text-pretty font-semibold mt-2">
                crafted with care and with your needs in mind,
                these features are designed to provide a better and more satisfying 
                experience for our users.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-2 p-8   ">
            <div className="bg-[#192231] rounded-2xl p-4  text-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out">
              <div className="">
              <SlCalender className="text-3xl mt-1"/>
              <br/>
              <h2 className="font-bold text-2xl">Tracking</h2>
              <br/>
              <p className="text-pretty ">Stay on top of your fitness journey with smart tracking tools that monitor your workouts, progress, and goals. Whether its s reps, sets, or calories burned we keep you accountable every step of the way.
                </p>
                </div>
            </div>
             <div className="bg-[#192231] rounded-3xl p-2  text-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out">
              <div><IoPhonePortraitOutline className="text-4xl mt-2" />
              <br/>
              <h2 className="font-bold text-2xl">Insight</h2>
              <br/>
              <p className="text-pretty ">Unlock powerful insights into your performance with personalized analytics. From strength gains to recovery trends, we help you understand your body better and train smarter.
                </p>
                </div>
            </div>
             <div className="bg-[#192231] rounded-2xl p-2  text-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out">
              
              <div><BiStopwatch className="text-5xl mt-2" />
              <br/>
              <h2 className="font-bold text-2xl">Real Time</h2>
              <br/>
              <p className="text-pretty ">Experience real-time updates on your workouts, heart rate, and progress. Instant feedback keeps you motivated and ensures every session counts no delays, just results.
                </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
