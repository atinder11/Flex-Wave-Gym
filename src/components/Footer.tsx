import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-mainblack py-5">
        <div className="container mx-auto px-4">
          <footer className="footer sm:footer-horizontal text-white gap-8 sm:gap-12">
            <aside className="space-y-4">
              <p className="mt-2">
                <Link href="/">
                <button className="btn">Flex wave</button>
                </Link>
                
                <br />
                <br />
                Providing reliable service since 1992
              </p>

              <div className="grid grid-cols-3 gap-4">
                <Link href="https://www.linkedin.com/in/atinder-kumar/" target="_blank">
                  <FaInstagram className="text-2xl cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/atinder-kumar/" target="_blank">
                  <FaFacebookF className="text-2xl cursor-pointer" />
                </Link>
                <Link href="mailto:atinderk71@mail.com">
                  <IoIosMail className="text-3xl cursor-pointer" />
                </Link>
              </div>
            </aside>

            <nav className="mt-2 space-y-1">
              <h6 className="footer-title">Company</h6>
              <Link href="/about" className="link link-hover">About us</Link>
              <Link href="/program" className="link link-hover">Program</Link>
              <Link href="/plan" className="link link-hover">Plan</Link>
              <Link href="/contact" className="link link-hover">Contact Us</Link>
            </nav>

            <nav className="mt-2 space-y-1">
              <h6 className="footer-title">Social</h6>
              <Link href="./" className="link link-hover">Instagram</Link>
              <Link href="./" className="link link-hover">Facebook</Link>
              <Link href="tel:+919821023521" className="link link-hover">Phone</Link>
              <Link href="https://maps.app.goo.gl/GQGyhUGaW8b3rGuB9 "  target="_blank" className="link link-hover">Location</Link>
            </nav>

            <nav className="mt-2 space-y-1">
              <h6 className="footer-title">Legal</h6>
              <Link href="/" className="link link-hover">Terms of use</Link>
              <Link href="/" className="link link-hover">Privacy policy</Link>
              <Link href="/" className="link link-hover">Cookie policy</Link>
            </nav>
          </footer>

          <hr className="bg-white mt-6 opacity-40" />

          <footer className="footer footer-center sm:footer-horizontal text-white mt-6">
            <aside>
              <Link href="/">
             
              <p className="cursor-pointer text-md font-semibold">
                Copyright © {new Date().getFullYear()} - All rights reserved by
                Flex Wave Gym
              </p>
               </Link>
            </aside>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
