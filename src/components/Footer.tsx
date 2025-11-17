import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-mainblack">
        <div className="container mx-auto px-4">
          <footer className="footer sm:footer-horizontal text-white   ">
            <aside>
              <p className="mt-2">
                <button className="btn">Flex wave </button>
                <br />
                Providing reliable service since 1992
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div><Link href="./">
                <FaInstagram  className="text-2xl"/>
                </Link></div>
                <div><Link href="./"><FaFacebookF  className="text-2xl"/> </Link></div>
                <div><Link href="./"> <IoIosMail  className="text-2xl"/> </Link></div>
              </div>
            </aside>
            <nav className="mt-2">
              <h6 className="footer-title">Company</h6>
              <Link href="./" className="link link-hover">
                About us
              </Link>
              <Link href="./" className="link link-hover">
                Contact
              </Link>
              <Link href="./" className="link link-hover">
                Jobs
              </Link>
              <Link href="./" className="link link-hover">
                Press kit
              </Link>
            </nav>
            <nav className="mt-2">
              <h6 className="footer-title">Wellness</h6>
              <Link href="./" className="link link-hover">
                Our Program
              </Link>
              <Link href="./" className="link link-hover">
                How its Works
              </Link>
              <Link href="./" className="link link-hover">
                Refer your company
              </Link>
              <Link href="./" className="link link-hover">
                Benefit Blog
              </Link>
            </nav>
            <nav className="mt-2">
              <h6 className="footer-title">Legal</h6>
              <Link href="./" className="link link-hover">
                Terms of use
              </Link>
              <Link href="./" className="link link-hover">
                Privacy policy
              </Link>
              <Link href="./" className="link link-hover">
                Cookie policy
              </Link>
            </nav>
          </footer>
          <hr className="color-white mt-2 bg-white"/>
          <footer className="footer sm:footer-horizontal footer-center text-white mt-4 ">
             
  <aside>
    <p className="cursor-pointer text-xl font-bold">Copyright © {new Date().getFullYear()} - All right reserved by Flex Wave Gym</p>
  </aside>
</footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
