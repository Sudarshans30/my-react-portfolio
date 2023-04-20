import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Sudarshan, a recent graduate of The Coding Bootcamp from The university of Sydney with a degree in Information Systems as well. 
        Throughout my academic and bootcamp experiences, I've developed a deep understanding of how technology 
        can be used to solve complex problems.
        </p>

        <br />

        <p className="text-xl">
        As a detail-oriented and enthusiastic programmer, I'm passionate about developing clean, efficient code 
        that can deliver real-world solutions. With a solid foundation in various programming languages and technologies,
        I'm excited to tackle new challenges and collaborate with others to create innovative solutions.
        </p>

        <br />

        <p className="text-xl">
        In addition to my technical skills, my degree in Information Systems has given me a broader perspective on how 
        technology can be used to help organizations operate more efficiently and effectively. I've gained valuable 
        experience in project management, data analysis, and systems design that I'm eager to apply in my coding work.


        </p>

        <br />

        <p className="text-xl">
        In my portfolio, you'll find a selection of projects that demonstrate my skills and approach to coding. 
        Whether I'm working on a personal project or collaborating with a team, I'm committed to delivering high-quality 
        work that meets the needs of my clients or users.
        </p>

        <br />
        <p className="text-xl">
        Thank you for considering my portfolio, and please don't hesitate to get in touch if you have any questions or opportunities you'd like to discuss!
        </p>
      </div>
    </div>
  );
};

export default About;
