import React from 'react'
import img1 from '../Components/assets1/img1.png'
import img5 from '../Components/assets1/img5.png'
import {CiShoppingCart} from 'react-icons/ci'




const Hero = () => {
    
  return (
    <div className='max-w-[1240px]  gap-4 md:gap-10  mt-10 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-teal-50 to-white px-4 md:px-10 items-center '>
        <div className='  col-span-1  pt-4 ' data-aos="fade-right"  data-aos-duration="1500">

            
            
            <div  className='font-serif  font-bold  text-4xl '>

           
            The Best Place To <br /> Find And Buy <br /> Amazing product
            </div>

            <div  className='pt-6 font-medium font-serif text-lg text-black'>
            Our new shoe will blow your mind with nice greep <br /> and balance for play to win the match easily on <br /> the ground
            </div>

            <div className='pt-12  flex  items-center gap-6' >
                
                

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



        <div className=' h-[400px]  col-span-1 md:mt-10 md:ml-60 '    >

        {/* data-aos="fade-up-left" data-aos-duration="1500" */}

        
    
       
           <img src={img1} alt=""  className='h-[420px]     ' />
        </div>


    </div>
  )
}

export default Hero