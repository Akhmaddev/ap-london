import React from 'react'
import Yangilik from '../Components/News'

const News = () => {
  return (
    <div>
      <Yangilik />
      <Yangilik />
      <Yangilik />
      <button className="px-10 py-3 ml-154 mb-14 border-2 border-[#BB2339] text-[#BB2339]  rounded-full ">
      Load More
      </button>
    </div>
  )
}

export default News