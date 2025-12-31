"use client";

import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-mainblack w-full">
      {/* STANDARD CONTAINER WITH px-4 */}
      <div className="container mx-auto px-4 py-6 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Work out with <br />
              an experienced personal trainer
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto md:mx-0 text-center md:text-left">
              Provide guidance on appropriate exercise techniques to develop a
              program tailored to your personal goals.
            </p>

            <div className="flex flex-row gap-3 items-center justify-center md:justify-start">
                <Link href="/about">
               
              <button className="btn rounded-2xl bg-mainblue text-white px-6">
                Get Started
              </button>
               </Link>
              <button className="btn btn-ghost text-mainblue " >
                Demo Training →
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 text-white">
              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  <CountUp end={160} duration={2} />K
                </p>
                <p className="text-xs text-gray-400">Connected Customers</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  <CountUp end={24} duration={2} />M
                </p>
                <p className="text-xs text-gray-400">Happy Members</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  <CountUp end={320} duration={2} />+
                </p>
                <p className="text-xs text-gray-400">Skilled Trainers</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden md:block w-full h-[420px] lg:h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/images/hero.jpg"
              alt="Personal Trainer"
              fill
              priority
              className="object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
