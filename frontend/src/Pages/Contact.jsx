import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://ap-london.loc/backend/boglanish')
            .then(res => {
               
                console.log("Backenddan kelgan asl ma'lumot:", res.data);
                
       
                if (Array.isArray(res.data)) {
                    setContacts(res.data);
                } 
                
                else if (res.data && Array.isArray(res.data.items)) {
                    setContacts(res.data.items);
                }
            })
            .catch(err => console.error("Aloqa xatosi:", err));
    }, []);

    return (
        <div className="bg-white py-30 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-bold mb-14">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-10 rounded-[35px] shadow-2xl border border-gray-100">
                    
                    
                    <div className="lg:col-span-4 space-y-8">
                        {contacts.length > 0 ? contacts.map((item, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <div className="w-15 h-15 shrink-0 flex items-center justify-center bg-[#F8F8F8] rounded-full border border-gray-100">
                                   
                                    <img 
                                        src={item.appimg || item.Appimg} 
                                        alt="icon" 
                                        className="w-7 h-7 object-contain" 
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[18px] font-bold text-[#242424]">
                                        {item.appname || item.Appname}
                                    </span>
                                    <span className="text-[14px] text-gray-400">
                                        {item.malumoti || item.Malumoti}
                                    </span>
                                </div>
                            </div>
                        )) : (
                            <p className="text-gray-400 animate-pulse text-sm font-medium">
                                Ma'lumotlar bazadan yuklanmoqda...
                            </p>
                        )}
                    </div>

                
                    <div className="lg:col-span-8 border-l border-gray-100 lg:pl-10">
                        <h3 className="text-3xl font-bold mb-4">Send Message</h3>
                        <p className="text-gray-400 text-sm mb-8">If you have any questions, you can send us an SMS or contact us by phone.</p>
                        
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your name" className="p-4 bg-[#F8F8F8] rounded-xl outline-none border border-transparent focus:border-[#BB2339]" />
                            <input type="email" placeholder="Email address" className="p-4 bg-[#F8F8F8] rounded-xl outline-none border border-transparent focus:border-[#BB2339]" />
                            <input type="text" placeholder="Phone number" className="p-4 bg-[#F8F8F8] rounded-xl outline-none border border-transparent focus:border-[#BB2339]" />
                            <input type="text" placeholder="Subject" className="p-4 bg-[#F8F8F8] rounded-xl outline-none border border-transparent focus:border-[#BB2339]" />
                            <textarea placeholder="Message" className="md:col-span-2 p-4 bg-[#F8F8F8] rounded-xl h-40 outline-none border border-transparent focus:border-[#BB2339] resize-none"></textarea>
                            <button type="button" className="bg-[#BB2339] text-white px-14 py-4 rounded-full font-bold w-max hover:shadow-lg transition-all active:scale-95">
                                Send message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;