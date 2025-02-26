import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import MedisageWebsite from '../Images/AbcWebsite.png'
import MedisageWebsite from '../Images/MedisageWebsite.png'
import Twitter from '../Images/Twitter.png'
import GoogleDoc from '../Images/GoogleDoc.png'
import KanbanBoard from '../Images/KanbanBoard.png'
import PaintWebsite from '../Images/PaintWebsite.png'
import NoteVault from '../Images/NoteVault.png'
import OnlineExaminationWebsite from '../Images/OnlineExaminationWebsite.png'
import GymWebsite from '../Images/GymWebsite.png'
import Quiz from '../Images/Quiz.png'
import GardentoTable from '../Images/GardentoTable.png'
import Link from "next/link";


export const Projects = () => {

  const projects = [
     {
      title: "Aditya Birla Capital",
      image: AbcWebsite,
      description: "A leading financial services provider in India, offering solutions in insurance, asset management, lending, & wealth management",
      demo: "https://lifeinsurance.adityabirlacapital.com/"
    },
    {
      title: "MediSage",
      image: MedisageWebsite,
      description: "A global platform uniting medical minds for knowledge sharing and collaboration, shaping the future of healthcare.",
      demo: "https://mymedisage.com"
    },
    {
      title: "Twitter",
      image: Twitter, 
      description: "Twitter functionality replicated: register, tweet, follow, like, retweet, & comment. Experience core features of Twitter.",
      code: "https://github.com/PrachiiGuptaa/Twitter-Clone",
      demo: "https://twitter-clone-one-inky.vercel.app" 
    },
    {
      title: "Google Docs",
      image: GoogleDoc,
      description: "Complete doc editing, formatting, and downloading functionality replicated. Seamlessly edit and manage docs online.",
      code: "https://github.com/PrachiiGuptaa/Google-Docs",
      demo: "https://google-docs-dusky.vercel.app" 
    },
    {
      title: "Kanban Board",
      image: KanbanBoard,
      description: "Visualize and manage work, optimize processes, and track progress. Ideal for track & project management.",
      code: "https://github.com/PrachiiGuptaa/Kanban-Board",
      demo: "https://kanban-board-eight-pi.vercel.app" 
    },
    {
      title: "Paint Website",
      image: PaintWebsite, 
      description: "A Next.js site, styled with Tailwind CSS, dynamically pulls and displays data from a GraphQL API for interactive content.",
      code: "https://github.com/PrachiiGuptaa/PaintWebsite",
      demo: "https://paint-website.vercel.app" 
    },
    {
      title: "Note Vault",
      image: NoteVault,
      description: "A feature-rich notes website offering a seamless experience to create, organize, and access your notes effortlessly.",
      code: "https://github.com/PrachiiGuptaa/Notes-Website",
      demo: "https://notes-website-theta.vercel.app" 
    },
    {
      title: "Examination Website",
      image: OnlineExaminationWebsite, 
      description: "Admin uploads & manages questions, including images. Students take tests & receive scorecards with scores.",
      code: "https://github.com/PrachiiGuptaa/Online-Examination-Website",
      demo: "https://online-examination-website.vercel.app" 
    },
    {
      title: "Fit Hub",
      image: GymWebsite,
      description: "Gym website featuring facilities, training programs, registration, & interactive interface for enhanced user experience.",
      code: "https://github.com/PrachiiGuptaa/FitHub",
      demo: "https://fit-hub-ivory.vercel.app" 
    },
    {
      title: "Quiz",
      image: Quiz, 
      description: "Quiz app offering 3 gameplay modes, 10 MCQs per topic, and a scorecard displayed upon completion.",
      code: "https://github.com/PrachiiGuptaa/Quiz-Application ",
      demo: " https://quiz-application-ten.vercel.app" 
    },
    {
      title: "Garden to Table",
      image: GardentoTable, 
      description: "A mobile-responsive website showcasing a colorful array of vegetables with clean, modern design using HTML and CSS.",
      code: "https://github.com/PrachiiGuptaa/Garden-To-Table",
      demo: "https://chipper-monstera-89b2c1.netlify.app" 
    },
  ]


  return (
    <>
    <div className="text-center p-4 pt-20">
        <p className="dark:text-slate-200">Browse my</p>
        <p className="text-4xl font-semibold dark:text-slate-200">Projects</p>
      </div>
      <div className="p-10 py-8">
        <Splide
        options={{
          pagination: false,
          padding: { left: "0%", right: "7.5%" },
          type: "slide",
          perPage: 3,
          gap: "1rem",
          rewind: false,
          perMove: 1,
          breakpoints: {
            640: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <div className='bg-white shadow-xl p-6 rounded-md dark:bg-slate-600 dark:text-slate-200 transition-transform transform hover:scale-105 hover:shadow-2xl'>
                <div className="flex justify-start">
                  <Image src={project.image} alt={project.title} height={300} width={300} />
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <div className="flex space-x-2 mt-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded dark:bg-gray-800 dark:text-slate-200">
                  <Link href={project.demo} target="_blank" rel="noreferrer">Live Site</Link>
                    
                    </button>
                        { /*        {project.code && (
                    <button className="bg-gray-500 text-white py-2 px-4 rounded">
                      <Link href={project.code} target="_blank" rel="noreferrer">View Code</Link>
                      </button>
                  )} */}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  ) 
};

