import React from "react";
import Ecommercebackend from '../assets/project/Ecommercebackend.jpg';
import Jatepwa from '../assets/project/Jatepwa.jpg';
import NoteTakingAPP from '../assets/project/NoteTakingAPP.png';
import PasswordGenerator  from '../assets/project/PasswordGenerator.png';
import Platepals from '../assets/project/Platepals.png';
import TalentBridge from '../assets/project/TalentBridge.jpg';
import WeatherDashboard from '../assets/project/WeatherDashboard.png';
import WorkdaySchedular from '../assets/project/WorkdaySchedular.png';
import EmployeeTemplates from '../assets/project/EmployeeTemplates.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommercebackend,
      href: "https://github.com/Sudarshans30/ecommerce-backend"
    },
    {
      id: 2,
      src: Jatepwa,

    },
    {
      id: 3,
      src: NoteTakingAPP,

    },
    {
      id: 4,
      src: PasswordGenerator,

    },
    {
      id: 5,
      src: Platepals,

    },
    {
      id: 6,
      src: TalentBridge,
    },
    {
      id: 7,
      src: WeatherDashboard,
    },
    {
      id: 8,
      src: WorkdaySchedular,
    },
    {
      id: 9,
      src: EmployeeTemplates
    }

  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
 