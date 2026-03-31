import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Galareya = () => {
    
    const [galareyaManzil] = useState('http://ap-london.loc/backend/galareya');
    const [imagesManzil] = useState('http://ap-london.loc/backend/images');
    
    const [galareya, setGalareya] = useState([]);
    const [photos, setPhotos] = useState([]);

    
    useEffect(() => {
       
        axios.get(galareyaManzil)
            .then(info => setGalareya(info.data))
            .catch(err => console.error("Matn yuklashda xato:", err));

       
        axios.get(imagesManzil)
            .then(info => setPhotos(info.data))
            .catch(err => console.error("Rasmlar yuklashda xato:", err));
    }, []);

    
    const info = galareya.length > 0 ? galareya[0] : null;

    return (
        <div className="py-20 bg-white ">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                
               
                {info && (
                    <div className="lg:w-1/3 w-full">
                        <div className="flex items-center gap-3 mb-4">
                           
                           
                        </div>
                        
                        <h2 className="text-5xl  text-[#242424] mb-6 ">
                            {info.teg}
                        </h2>
                        
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            {info.malumotlar}
                        </p>
                        
                        <button className="px-10 py-3 border-2 border-[#BB2339] text-[#BB2339] font-bold rounded-full ">
                            {info.tugmacha}
                        </button>
                    </div>
                )}

           
                <div className="lg:w-2/3 w-full flex gap-6 ">
                    {photos.map((item, index) => (
                        <div key={index} className="relative min-w-65 h-110 rounded-4xl overflow-hidden group shadow-xl">
                            <img 
                                src={item.rasmlinki} 
                                alt="Restaurant gallery" 
                                className="w-full h-full object-cover transform"
                            />
                            
                            
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Galareya;