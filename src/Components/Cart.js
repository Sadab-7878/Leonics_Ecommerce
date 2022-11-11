import React from 'react'


import {GiSelfLove} from "react-icons/gi"
import {TiInfoLargeOutline} from "react-icons/ti"

const Cart = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-10 h-96 w-[300px] shadow-xl  '>
        
        <div className='flex flex-col  items-end mt-5 mr-2 space-y-36'>
          
            <div>

            <GiSelfLove />
            </div>
            <div>

            <TiInfoLargeOutline />
            </div>
            <div>

            <button className='border px-2 font-bold text-center rounded-md bg-gradient-to-r from-cyan-300 to-cyan-100'>Add to Cart</button>
            </div>
        </div>
        <div>hello</div>

       
    </div>

    
  )
}

export default Cart