import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Galareya from '../Components/Galareya';
import PopularDishes from '../Components/Topcenter';
const Menu = () => {
  return (
    <div>
       <PopularDishes />
       <PopularDishes />
       <PopularDishes />
       <PopularDishes />
        <Galareya />


    </div>
  )
}

export default Menu