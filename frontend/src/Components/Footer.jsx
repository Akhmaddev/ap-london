import React from "react";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="relative bg-[#BB2339] text-white pt-64 pb-8 mt-40">
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl bg-[#BB2339] border border-white/10 p-8 md:p-14 text-center rounded-[20px] shadow-2xl">
        <div className="flex flex-col items-center mb-4">
          <p className="font-semibold tracking-widest  text-4xl">Powered by Akhmaddev</p>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 capitalize leading-tight">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white/80 mb-10">And never miss latest Updates!</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-white/40 px-6 py-3 rounded-full outline-none w-full text-white placeholder:text-white/60 focus:border-white transition-all"
          />
          <button className="bg-transparent border border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-[#BB2339] transition-all w-full md:w-auto uppercase text-sm tracking-widest">
            Subscribe
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
          
          
          <div className="flex flex-col items-center md:mt-10">
            <h3 className="text-2xl font-semibold mb-6 capitalize tracking-wide">Contact Us</h3>
            <p className="opacity-80 mb-2">9 W 53rd St, London, NY 10019, UK</p>
            <p className="opacity-80">+1 212-344-1230</p>
            <p className="opacity-80">+1 212-555-1230</p>
          </div>

          <div className="flex flex-col items-center">
            
            <div className="mb-8">
               
               <img src={logo} alt="logo" className="w-54 mx-auto" /> 
            </div>
            
            <p className="text-white text-1xl opacity-90">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
           

            
          </div>

          
          <div className="flex flex-col items-center md:mt-10">
            <h3 className="text-2xl font-semibold mb-6 capitalize tracking-wide">Working Hours</h3>
            <div className="mb-6">
              <p className="opacity-80">Monday-Friday:</p>
              <p className="font-medium">08:00 am - 12:00 am</p>
            </div>
            <div>
              <p className="opacity-80">Saturday-Sunday:</p>
              <p className="font-medium">07:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-24 text-white/50 text-[12px] tracking-widest uppercase">
          <p>2022 Eat Turkish. All Rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;