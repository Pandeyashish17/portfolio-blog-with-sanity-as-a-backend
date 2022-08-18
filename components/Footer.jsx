import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="bg-[#121212] pt-8">
        <hr className=" bg-slate-600 " />

        <div className="max-w-screen-lg  px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Menu
            </div>
            <ul>
              <Link href="/">
                <li className="my-2">
                  <a className="hover:text-indigo-600">Home</a>
                </li>
              </Link>
              <Link href="/posts">
                <li className="my-2">
                  <a className="hover:text-indigo-600">Posts</a>
                </li>
              </Link>
              <Link href="/#about">
                <li className="my-2">
                  <a className="hover:text-indigo-600">About</a>
                </li>
              </Link>
              <Link href="/#skills">
                <li className="my-2">
                  <a className="hover:text-indigo-600">Skills</a>
                </li>
              </Link>

              <Link href="/#projects">
                <li className="my-2">
                  <a className="hover:text-indigo-600">Projects</a>
                </li>
              </Link>
              <Link href="/contact">
                <li className="my-2">
                  <a className="hover:text-indigo-600">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">Ashish</h3>
            <p className="text-slate-300 text-sm mb-10 capitalize">
              this portfolio/blog is stacked with nextjs , tailwind css and
              sanity as a headless cms
            </p>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Contact Me
            </div>
            <ul>
              <li className="my-2">
                <a className="hover:text-indigo-600">
                  Kanchan-3 Haraiya Rupandehi Nepal{" "}
                </a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600">asespandey2@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
