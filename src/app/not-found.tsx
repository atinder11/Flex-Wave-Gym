"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] dark:bg-[#0F0F0F] transition-colors duration-300">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-4 py-20 text-gray-800 dark:text-gray-200">
        <h1 className="text-9xl font-bold text-mainblue">404</h1>

        <p className="text-xl mt-4 text-gray-700 dark:text-gray-300">
          Page Not Found
        </p>

        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href="/"
            className="btn btn-primary flex items-center gap-2 text-white"
          >
            <IoHome /> Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline flex items-center gap-2
              text-gray-700 border-gray-400
              dark:text-gray-200 dark:border-gray-600"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
