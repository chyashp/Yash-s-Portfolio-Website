import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center  my-6 md:my-6 py-12 gap-4"
    >
      <div className="text-center">
        <h5 className="text-2xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] text-lg mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row justify-center gap-2">
          <Link
            href="https://github.com/chyashp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yash-kaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <div className="flex flex-col mt-4">
          <h6>Email:</h6> yash.kaur2371@gmail.com
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
