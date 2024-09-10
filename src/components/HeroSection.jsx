"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm Yash{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                2000,
                "Web Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            "As a passionate front-end developer with experience in building
            React projects, I'm eager to bring my skills to a dynamic team. I'm
            dedicated to creating responsive, user-friendly interfaces that
            deliver a seamless user experience."
          </p>
          <div>
            <Link
              href="https://github.com/chyashp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 w-full sm:w-fit hover:bg-slate-200 text-white">
                Github{" "}
              </button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/yash-kaur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 w-full sm:w-fit text-white  mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  LinkedIn
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
