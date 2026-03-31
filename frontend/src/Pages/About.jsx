import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        
        axios.get('http://ap-london.loc/backend/about')
            .then(res => {
                setAboutData(res.data);
            })
            .catch(err => console.error("About ma'lumotlarini olishda xato:", err));
    }, []);

    return (
        <div className="bg-white py-20 flex flex-col items-center">
            <div className="container mx-auto px-6 md:px-20 max-w-4xl">
                {aboutData && aboutData.length > 0 ? (
                    aboutData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-8 text-center">
                            
                           
                            <div className="mb-4">
                                <h2 className="text-black text-5xl font-bold mb-2">{item.nom}</h2>
                                
                            </div>

                            
                            {item.kaferasmi && (
                                <div className="w-full">
                                    <img 
                                        src={item.kaferasmi} 
                                        alt={item.nom} 
                                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            )}

                           
                            <div className="text-gray-500 text-2xl leading-relaxed text-justify">
                                <p>
                                    {item.malumotlari}
                                </p>
                            </div>

                        </div>
                    ))
                ) : (
                    <p className="text-center">Yuklanmoqda...</p>
                )}
            </div>
        </div>
    );
};

export default About;