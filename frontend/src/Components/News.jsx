import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [manzil] = useState("http://ap-london.loc/backend/news");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(manzil).then((res) => {
      setNewsData(res.data);
    });
  }, [manzil]);

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-18">
        

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
          {newsData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
     
              <div className="h-64 overflow-hidden">
                <img
                  src={item.rasmii}
                  alt={item.nomii}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl  text-[#BB2339] mb-3">
                  {item.nomii}
                </h3>
                <p className="text-gray-600 mb-6 ">
                  {item.yozuvi}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href="news"
                    className=" text-[#BB2339] hover:underline"
                  >
                    {item.tugmasi || "Read More"}
                  </a>
                  <span className="text-gray-600 ">
                    {item.sanasi}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        
      </div>
    </div>
  );
};

export default News;