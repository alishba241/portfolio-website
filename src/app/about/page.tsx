import Link from "next/link";
import React from "react";
import Footer from "../footer/page";

function AboutPage() {
  return (
    <div className="mt-[100px] mb-12 px-4">
      <h2 className="text-blue-500 font-bold text-2xl md:text-4xl text-sans text-center ">
        So Who I Am?
      </h2>

      <div className="flex justify-center mt-12">
        <div className="h-auto md:h-[600px] w-full md:w-[95%] border-2 border-t-cyan-300 border-r-transparent border-b-cyan-300 border-l-transparent text-white font-sans text-center p-6 md:p-12">
          <p className="text-lg md:text-xl">Hi, I&#39;m Alishba Naveed!</p>
          <br />
          <p className="text-sm md:text-base leading-relaxed">
            I&#39;m a passionate Frontend Developer and Graphic Designer with a background in Medical Studies. With over 1.5 years of experience in web development, I specialize in creating visually appealing and responsive websites. My expertise includes HTML, CSS, JavaScript, TypeScript, and Tailwind CSS, and I&#39;m currently exploring Next.js to further enhance my development skills.
          </p>
          <br />
          <p className="text-sm md:text-base leading-relaxed">
            In addition to coding, I have a strong foundation in graphic design, which allows me to craft cohesive digital experiences. I&#39;m also certified as an Amazon Virtual Assistant, showcasing my versatility in the tech industry.
          </p>
          <br />
          <p className="text-sm md:text-base leading-relaxed">
            While balancing my studies as a first-year medical student, I&#39;m deeply interested in how technology and healthcare intersect, particularly with advancements in AI and Web3. I&#39;m currently pursuing a specialized course in Artificial Intelligence and Metaverse at Governor House to explore new horizons in this field.
          </p>
          <br />
          <p className="text-sm md:text-base leading-relaxed">
            I&#39;m always excited to take on new challenges and collaborate with clients to bring their ideas to life through innovative design and development.
          </p>
          <br />
          <p className="text-sm md:text-base leading-relaxed">
            Let&#39;s connect and create something amazing together!
          </p>
        </div>
      </div>

      <div className="">
        <div className="text-center pt-12 font-sans text-2xl md:text-3xl font-bold">
          <h1 className="text-white">My Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center mt-12 px-4 md:px-12">
          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              Responsive Website Design
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              I will design fully responsive websites that look great on any device, whether its a mobile phone, tablet, or laptop. Ensuring your site is visually appealing and functional across all screen sizes.
            </p>
          </div>

          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              Personal Portfolio Website Development
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              Showcase your work professionally with a customized portfolio website designed to highlight your skills and projects effectively.
            </p>
          </div>

          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              One-Page Websites
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              I build simple, stylish one-page websites that deliver all the essential information in a clean and engaging format. Ideal for small businesses or personal profiles.
            </p>
          </div>

          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              Next.js Website Development
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              I develop fast, SEO-friendly websites using Next.js, providing high performance and smooth navigation with dynamic routing.
            </p>
          </div>

          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              Frontend Bug Fixing and Improvements
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              I resolve frontend issues like layout problems, responsiveness errors, and browser compatibility bugs to ensure your website works flawlessly.
            </p>
          </div>

          <div className="group h-auto md:h-[300px] w-full md:w-[300px] bg-[#383e4d] rounded-2xl text-center p-6 hover:bg-cyan-300 duration-1000 hover:text-black gap-6">
            <p className="font-bold text-xl text-cyan-300 group-hover:text-cyan-900 duration-1000">
              Website Maintenance & Updates
            </p>
            <p className="mt-4 text-white group-hover:text-black duration-1000">
              I offer regular website updates, including content changes, security patches, and the addition of new features, ensuring your site remains up-to-date and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
