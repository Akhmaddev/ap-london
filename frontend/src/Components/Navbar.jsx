import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import axios from 'axios'   
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [manzil, setManzil] = useState('http://ap-london.loc/backend/navbar')
    const [navbar , setNavbar] = useState([])
      
    useEffect(() => {
        axios.get(manzil)
        .then(info => setNavbar(info.data))
    }, [])

    console.log(navbar);
    
  return (
    <div className='bg-[#BB2339] py-6.25 flex justify-around items-center gap-7 flex-wrap'>
       <Link to='/'>
       <img src={logo} alt="" />
        </Link>
        <div className='flex justify-center items-center gap-10 flex-wrap'>
        {
            navbar&&navbar.map((value, index) =>{
                return(
                    <Link className='text-white' to={value.link}>{value.title}</Link>
                )
            } )
        }
        <button className="border border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-[#BB2339] transition-all duration-300">
        Log In
        </button>


        </div>
    </div>
  )
}

export default Navbar