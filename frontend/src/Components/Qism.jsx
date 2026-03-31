import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Qism = () => {
        const [qism, setQism] = useState([])
    
        useEffect(() => {
            
            axios.get('http://ap-london.loc/backend/qism')
                .then(res => {
                   
                    setQism(res.data);
                })
                .catch(err => console.error("Qism ma'lumotlarini olishda xato:", err))
        }, [])
  return (
    <div className="bg-[#F8F8F8] py-20 flex flex-col items-center">
                <div className="text-center mb-16">
                    <p className="text-black ">Testimony</p>
                    <h2 className="text-black text-5xl">Happy Customers</h2>
                </div>

                <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {qism && qism.length > 0 ? (
                        qism.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50">
                                <div className="flex flex-col space-y-4">
                                    
                                    <h4 className="text-black text-2xl">
                                        {item.ism}
                                    </h4>
                                    
                                    
                                    <p className="text-gray-500">
                                        {item.malumot}
                                    </p>

                                   
                                    <div className="flex items-center gap-4 text-black text-[20px]  ">
                                        <span className="flex items-center gap-1"> {item.sana}</span>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-400">
                            Ma'lumotlar yuklanmoqda...
                        </div>
                    )}
                </div>

                
            </div>
  )
}

export default Qism