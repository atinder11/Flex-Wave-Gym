import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../assets/owner.jpg";

function AboutUs() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mt-4">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-2">
            <div className="hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out">
              <Image
                src={img1}
                className="w-full h-full rounded-2xl"
                alt="owner image"
              />
            </div>
            <div>
              <p className="text-pretty text-xl  ">
                At <b>Flex Wave Gym</b>, we believe strength is more than muscle
                 it’s discipline, resilience, and community. Founded in the
                heart of the USA, Flex Wave isn’t just a gym; it’s a movement
                for those who push their limits, embrace the grind, and rise
                above average.
                <br />
                <br />
                Our mission is simple: to help you become the strongest version
                of yourself physically and mentally. With cutting-edge
                equipment, expert trainers, and a motivating environment, we
                empower every member to train harder, recover smarter, and live
                healthier.
                <br />
                <br />
                From beginners taking their first step into fitness to elite
                athletes chasing peak performance, every rep counts and every
                member matters. This is your house — <b>the Flex Wave . 💪</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
