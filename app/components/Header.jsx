import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
    justify-center gap-4"
    >
      <div>
        <Image
          src={assets.My_pic}
          alt="MyProfile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi ! I'm Ammar Ibrahim{" "}
        <Image src={assets.hand_icon} alt="HandIcon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-serif">
        Frontend Developer
      </h1>
      <p className="max-w-2xl mx-auto font-serif">
        I am a frontend developer with experience of some projects that i make
        by using Html, Css,Javascript and Next.js. I also use GitHub for push my
        code.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#Contact"
          className="px-10 p-3 border border-white rounded-full bg-black text-white
        flex item gap-2"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 h-4 pt-1"
          />{" "}
        </a>

        <a
          href="/Ammar_Ibrahim.pdf"
          download
          className="px-10 py-3 border rounded-full 
      border-gray-500 flex items-center gap-2 "
        >
          my resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
