import Image from "next/image";
import React from "react";
import HomeImg from "../Images/HomeImg.jpg";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail, MdOutlineLocalPhone, MdFileDownload  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export const HomePage = () => {

  const goToWhatsapp = () => {
    const contactNumber = "9170133568";
    const whatsAppText = "Hello!";
    const encodedText = encodeURIComponent(whatsAppText);
    const link = `https://wa.me/${contactNumber}?text=${encodedText}`;

    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center p-10 md:p-28 md:gap-4 dark:bg-slate-800">
        <div className="mb-8 md:mb-0">
          <Image
            src={HomeImg}
            alt="Prachi Gupta"
            className="rounded-full aspect-square"
            height={330}
            width={330}
          />
        </div>
        <div className="text-center flex flex-col dark:text-slate-200">
          <p className="text-lg md:text-xl">Hello, I am</p>
          <p className="text-4xl md:text-5xl font-bold my-2">Prachi Gupta</p>
          <p className="text-xl md:text-2xl font-semibold">
            Software Developer
          </p>
          <div className="p-3 flex gap-4 justify-center my-2">
            <div className="border border-black px-3 py-2 rounded-full md:text-base text-sm dark:bg-slate-200 dark:text-black">
              <a href="/CV_PrachiGupta.pdf" download="CV_PrachiGupta">
                <div className='flex gap-2 items-center justify-center'>
                <span>Download CV</span>
                <span className='text-lg'><MdFileDownload/></span>
                </div>
              </a>
            </div>
            <button className="border border-black px-3 py-2 rounded-full md:text-base text-sm bg-black text-white dark:bg-slate-200 dark:text-black">
              <Link href="tel:+919170133568" target="_blank" rel="noreferrer">
              <div className='flex gap-2 items-center justify-center'>
                <span>Contact me</span>
                <span><MdOutlineLocalPhone/></span>
                </div>
              </Link>
            </button>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://www.linkedin.com/in/prachi-gupta-9a218226a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedinSquare className="text-2xl" />
            </Link>
            <Link href="https://github.com/PrachiiGuptaa" target="_blank">
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              href="mailto:guptaprachi2098@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <MdEmail className="text-2xl" />
            </Link>
            <span
              onClick={() => {
                goToWhatsapp();
              }}
              className='cursor-pointer'
            >
              <IoLogoWhatsapp className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
