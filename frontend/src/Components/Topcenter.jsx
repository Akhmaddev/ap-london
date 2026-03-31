import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularDishes = () => {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        axios.get('http://ap-london.loc/backend/topcenter')
            .then(res => {
                setDishes(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Xatolik yuz berdi:", err);
                setLoading(false);
            });
    }, []);

    

    return (
        <section className="py-10 bg-white w-full">
            <div className="max-w-350 mx-auto px-6 md:px-20">
                
              
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        
                        <div className="h-1 bg-[b8B2339] w-20 rounded-full"></div>
                    </div>
                    
                   
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="group bg-neutral-100 border shadow-gray-50 border-none rounded-[40px] p-8  flex flex-col items-center drop-shadow-2xl">
                            
                            
                            <div className="h-50 rounded-3xl w-full flex items-center justify-center mb-6 overflow-hidden">
                                <img 
                                    src={dish.image} 
                                    alt={dish.divtext} 
                                    
                                />
                            </div>

                            
                            <div className="text-center flex flex-col items-center w-full">
                                <h3 className="text-gray-800 font-bold text-xl mb-3 min-h-14 flex items-center justify-center">
                                    {dish.divtext}
                                </h3>
                                
                                
                                <div className="flex text-yellow-400 text-3xl mb-4">
                                    {"★★★★★".split("").map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                
                                <p className="text-green-700 font-black text-2xl  tracking-tight">
                                    {dish.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularDishes;