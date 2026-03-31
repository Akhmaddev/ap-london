import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PopularDishes from "../Components/Topcenter";
import Qism from "../Components/Qism";
import New from "../Components/News";
import Galareya from "../Components/Galareya";

const Home = () => {
  const [manzil, setManzil] = useState("http://ap-london.loc/backend/header");
  const [header, setHeader] = useState([]);

  useEffect(() => {
    axios.get(manzil).then((info) => setHeader(info.data));
  }, []);

  return (
    <div>
      <div className="bg-[#BB2339] min-h-150 flex items-center px-10 md:px-20 py-20">
        {header && header[0] && (
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-xl space-y-6">
              <h3 className="text-xl font-semibold tracking-wide">
                {header[0].little_title}
              </h3>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight ">
                {header[0].title}
              </h1>

              <p className="text-lg opacity-80 leading-relaxed max-w-md">
                {header[0].info}
              </p>

              <div className="pt-4">
                <Link to={header[0].button_link}>
                  <button className="border border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-[#BB2339] transition-all duration-300">
                    {header[0].button_text}
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={header[0].img}
                alt=""
                className="w-87.5 md:w-145 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <PopularDishes />
        <h2 className="ml-20.5 text-[b8B2339] text-4xl md:text-5xl font-bold tracking-tight">
          Our Regular Menu Pack
        </h2>
        <div className="w-full overflow-x-auto pb-2">
          <div className="mt-10 flex items-center justify-start md:justify-center min-w-max">
            <button className="px-20 py-2 bg-[#bB2339] text-white border border-[#bB2339] rounded-full text-sm font-medium transition-all hover:opacity-90 active:scale-95">
              All
            </button>

            <button className="px-10 py-2  bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Shawarma
            </button>

            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Turk Kebab
            </button>

            <button className="px-12 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Hamburger Kebab
            </button>

            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Doner Kebab
            </button>

            <button className="px-8 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Shish Kebab
            </button>

            <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              French Fries Pizza
            </button>

               <button className="px-10 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium transition-all hover:border-[#bB2339] hover:text-[#bB2339] active:scale-95">
              Desserts
            </button>
          </div>
        </div>
        <PopularDishes />
        <PopularDishes />
        <PopularDishes />
        <Qism />
        <div className="text-center  mt-1">
          <p className="text-lg  text-black">News</p>
          <h2 className="text-4xl md:text-5xl  text-[#BB2339] mt-2">
            Gericht Updates
          </h2>
        </div>
        <New />
        <Galareya />
      </div>
    </div>
  );
};

export default Home;
