import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import {HomePage} from './../components/Home/Home';
import { Projects } from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='dark:bg-slate-800  bg-gray-50'>
      <div id="home" className="">
        <HomePage/>
      </div>
      <section id="about" className="">
        <About/>
      </section>
      <section id="projects" className="">
        <Projects/>
      </section>
      </div>
      <Footer/>
    </>
  );
}
