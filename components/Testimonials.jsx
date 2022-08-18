import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section
        className=" body-font text-white bg-[#121212] pt-5"
        id="#testimonials"
      >
        <h1 className="text-4xl mb-5 text-teal-500 font-bold sm:text-5xl ml-14">
          #Testimonials
        </h1>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 capitalize text-center">
          i know you do not believe me
        </h1>
        <p className="lg:w-2/3 mx-auto text-center text-gray-500 capitalize leading-relaxed text-base">
          See What my parents had to say about me
        </p>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up-right">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/me.png"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  est commodi provident, eligendi vel neque excepturi atque
                  minima esse corporis!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  Laxmi Pandey{" "}
                </h2>
                <p className="text-gray-500">My Mom</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="slide-up">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/me.png"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur et voluptatibus ea eius pariatur fuga laborum
                  consectetur adipisci aut fugit!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  Binod Pandey{" "}
                </h2>
                <p className="text-gray-500">My Dad</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4" data-aos="fade-up-right">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/assets/me.png"
                />
                <p className="leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni recusandae, voluptate commodi ipsum similique
                  voluptatibus! Amet expedita odit sunt beatae.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  Anisha Pandey
                </h2>
                <p className="text-gray-500">My Sis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
