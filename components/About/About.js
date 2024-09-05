import Image from 'next/image';
import { useState } from 'react';
import AboutImg from '../Images/About1.jpg';
import Medisage from '../Images/MediSage.png';
import Functionup from '../Images/Functionup.jpg';
import {
  FaBriefcase, FaGitlab, FaHtml5, FaJsSquare, FaReact, FaBootstrap, FaGithub,
} from 'react-icons/fa';
import { GiJigsawPiece } from 'react-icons/gi';
import { IoLogoCss3 } from 'react-icons/io5';
import { SiTailwindcss, SiNextdotjs, SiMui, SiPostman } from 'react-icons/si';

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const renderExperience = () => (
    <div>
      <div className="flex gap-12 pb-8 items-center text-center">
        <span className="border border-gray-400 p-4 rounded-lg shadow-md dark:bg-slate-200 dark:text-black">
          <p>Completed</p>
          <p className="text-2xl font-semibold">6+</p>
          <p>Projects</p>
        </span>
        <span className="border border-gray-400 p-4 rounded-lg shadow-md dark:bg-slate-200 dark:text-black">
          <p>Mastered</p>
          <p className="text-2xl font-semibold">4+</p>
          <p>Techs</p>
        </span>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Image src={Medisage} alt="MediSage" height={50} width={50} />
          <div className="sm:w-48">
            <div className="text-[#000080] font-semibold dark:text-slate-200">MediSage, Mumbai</div>
            <div className="text-gray-600 dark:text-slate-300">Front-End Developer</div>
            <div className="text-gray-500 dark:text-slate-400">Sep 2023 - Jun 2024</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Image src={Functionup} alt="FunctionUp" height={50} width={50} className="rounded-full" />
          <div className="sm:w-48">
            <div className="text-[#000080] font-semibold dark:text-slate-200">FunctionUp, Bengaluru</div>
            <div className="text-gray-600 dark:text-slate-300">Front-End Developer - Intern</div>
            <div className="text-gray-500 dark:text-slate-400">Nov 2022 - Aug 2023</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div>
      <h3 className="mb-2 dark:text-slate-200">Languages</h3>
      <div className="flex gap-4 mb-4">
        <SkillBadge icon={<FaHtml5 />} label="HTML" />
        <SkillBadge icon={<IoLogoCss3 />} label="CSS" />
        <SkillBadge icon={<FaJsSquare />} label="JavaScript" />
      </div>
      <h3 className="mb-2 dark:text-slate-200">Frontend Development</h3>
      <div className="flex gap-4 mb-4">
        <SkillBadge icon={<SiNextdotjs />} label="Next.js" />
        <SkillBadge icon={<SiTailwindcss />} label="Tailwind CSS" />
        <SkillBadge icon={<FaReact />} label="React" />
      </div>
      <h3 className="mb-2 dark:text-slate-200">UI Library</h3>
      <div className="flex gap-4 mb-4">
        <SkillBadge icon={<SiMui />} label="Material UI" />
        <SkillBadge icon={<FaBootstrap />} label="Bootstrap" />
      </div>
      <h3 className="mb-2 dark:text-slate-200">Version Control</h3>
      <div className="flex gap-4 mb-4">
        <SkillBadge icon={<FaGitlab />} label="GitLab" />
        <SkillBadge icon={<FaGithub />} label="GitHub" />
      </div>
      <h3 className="mb-2 dark:text-slate-200">API Testing</h3>
      <div className="flex gap-4 mb-4">
        <SkillBadge icon={<SiPostman />} label="Postman" />
      </div>
    </div>
  );

  return (
    <>
      <div className="text-center p-4 pt-20">
        <p className="dark:text-slate-200">Get to know more</p>
        <p className="text-4xl font-semibold dark:text-slate-200">About Me</p>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 p-10 gap-12 md:gap-10 py-8">
        <div className="flex flex-col items-center pt-8 md:pt-4">
          <div className="flex space-x-4 md:gap-10 border-b border-gray-300 pb-4">
            <TabButton isActive={activeTab === 'experience'} onClick={() => setActiveTab('experience')} label="Experience" icon={<FaBriefcase />} />
            <TabButton isActive={activeTab === 'skills'} onClick={() => setActiveTab('skills')} label="Skills" icon={<GiJigsawPiece />} />
          </div>
          <div className="p-4 pt-6">
            {activeTab === 'experience' ? renderExperience() : renderSkills()}
          </div>
        </div>
        <div className="flex flex-col items-center p-2">
          <div className="mb-8">
            <Image
              src={AboutImg}
              alt="Prachi Gupta"
              className="rounded-full aspect-square"
              height={150}
              width={150}
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am Prachi Gupta, a dedicated Front-End Developer. With expertise in JavaScript, React, and Next.js, I build responsive applications focused on user satisfaction.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Throughout my career, I’ve sharpened my skills in UI/UX design, state management, and version control. I thrive in dynamic environments, collaborating effectively to deliver high-quality work even under tight deadlines.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Beyond coding, I’m committed to continuous learning and always seek out new challenges to expand my capabilities as a developer.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Let’s create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function TabButton({ isActive, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold ${
        isActive
          ? 'bg-[#000080] text-white dark:bg-slate-500'
          : 'text-black bg-white shadow-md border border-black dark:bg-slate-200 dark:text-black'
      }`}
    >
      <span className="flex gap-2 items-center">
        {label}
        {icon}
      </span>
    </button>
  );
}

function SkillBadge({ icon, label }) {
  return (
    <span className="border border-black p-2 flex gap-1 justify-center items-center bg-black text-white rounded-md dark:bg-slate-200 dark:text-black">
      {icon}
      <p>{label}</p>
    </span>
  );
}
