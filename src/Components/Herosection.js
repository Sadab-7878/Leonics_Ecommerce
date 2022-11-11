import React from "react";
import hero from '../Components/assets1/hero.svg'
import img5 from '../Components/assets1/img5.png'


import {CiShoppingCart} from 'react-icons/ci'


const Herosection = () => {
  return (
    <div className="px-4 lg:h-[500px] bg-gradient-to-r from-teal-50 to-white my-10 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8" data-aos="fade-right"  data-aos-duration="1500">
          <p className="font-sans font-bold text-4xl">The Best Place To <br /> Find And Buy <br /> Amazing product</p>
          <p className="font-medium font-serif text-lg text-black py-3">Our new shoe will blow your mind with nice greep <br /> and balance for play to <br /> win the match easily on  the ground</p>

          <div className="flex  items-center gap-6 py-4">

          <button className='px-4  flex   py-1 rounded-xl overflow-hidden shadow-xl  bg-gradient-to-r from-blue-400 to-cyan-400 text-white  items-center gap-2' >
                    <span>Shop now</span>

               
                
                <CiShoppingCart />

                </button>

                <div className='flex flex-row items-center'>
                    <img src={img5} alt="" className='md:w-10 object-cover'/>
                    <span className='underline underline-offset-1'>What’s Trending?</span>
                </div>

          </div>
        </div>

        <div>
            <img className="py-10" src={hero} alt=""  data-aos="fade-up-left" data-aos-duration="1500"/>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
