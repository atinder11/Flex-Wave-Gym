
"use client";
import React, { useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const SHEET_WEBHOOK = process.env.NEXT_PUBLIC_SHEET_URL ?? "";

const Page: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  // ⭐ Toast Stack with Green Success + Red Error
  const addToast = (msg: string, type: "success" | "error" = "success") => {
    const id = Date.now().toString();
    const container = document.getElementById("toastContainer");

    if (!container) return;

    const toast = document.createElement("div");

    // Strong green or red
    const colorClass =
      type === "success"
        ? "bg-green-600 border border-green-600 text-white font-xl"
        : "bg-red-600 border border-red-800 text-white";

    toast.className = `alert shadow-lg transform transition-all duration-500 translate-x-5 opacity-0 ${colorClass}`;
    toast.id = id;

    toast.innerHTML = `
      <span class="font-large">${msg}</span>
    `;

    container.appendChild(toast);

    // Slide in animation
    setTimeout(() => {
      toast.classList.remove("translate-x-5", "opacity-0");
      toast.classList.add("translate-x-0", "opacity-100");
    }, 10);

    // Auto remove after 3 sec
    setTimeout(() => {
      toast.classList.add("translate-x-5", "opacity-0");
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, goal }),
      });

      addToast("Form submitted successfully!", "success");

      setName("");
      setEmail("");
      setPhone("");
      setGoal("");
    } catch (err) {
      addToast("Network error, try again later!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-4 py-2 text-white min-h-screen">
        <div className="w-full mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9801061543003!2d77.36747977148802!3d28.630358330421178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3ce7%3A0x7335d9fcfd4d9db0!2sJAYPEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1761294419003!5m2!1sen!2sin"
            className="w-full h-[350px] md:h-[450px] rounded-lg"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold pb-1 text-black text-center dark:text-white transition hover:scale-110">
              Contact Us
            </h2>

            <ul className="space-y-5 text-black dark:text-white">
              <li className="flex items-center gap-3">
                <IoMdMailOpen className="text-2xl hover:scale-105 transition" />
                <Link
                  href="mailto:atinderk71@mail.com"
                  className="hover:underline"
                >
                  atinderk71@mail.com
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-2xl hover:scale-110 transition" />
                <Link href="tel:+919821023521" className="hover:underline">
                  +91 98210 23521
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <FaLocationDot className="text-2xl hover:scale-110 transition" />
                <a
                  href="https://maps.app.goo.gl/26xZYFaNNoRok8FW6"
                  target="_blank"
                  className="hover:underline"
                >
                  The Flex Wave Gym <br />
                  Sector 62 Noida, Uttar Pradesh, India
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-5 text-center hover:scale-110 transition">
              Join Now
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Goal</label>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Describe your goal..."
                  rows={4}
                  className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ⭐ Toast Container (Top Right) */}
      <div
        id="toastContainer"
        className="toast toast-top toast-end space-y-2 z-50"
      ></div>
    </>
  );
};

export default Page;
