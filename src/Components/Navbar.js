import React, {useState} from 'react'

import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {MdOutlinePersonAddAlt1} from 'react-icons/md'
import {AiOutlineCloseCircle, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import 'animate.css';


function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [nav, setNave] = useState(false)
  const handleclick = () => setNave(!nav)

  return (
    <div className=' max-w-[1240px]  mx-auto grid grid-cols-3   mt-2 '>

      <div className='flex  justify-between items-center col-span-2 '>
      <div className='text-3xl text-emerald-800 font-serif px-2'>
            Leonics.
        </div>

 
        <div className='hidden  md:flex justify-center gap-7  cursor-pointer'>
            <ul>Home</ul>
            <ul>Shop</ul>
            <ul>Brand</ul>
            <ul>Man</ul>
            <ul>Woman</ul>
            <ul>Help</ul>
        </div>
        <div className='md:hidden pl-4 flex justify-start   items-center   '>
        <div className='flex gap-5 items-center   cursor-pointer   '>

          {toggle && (
            <form className="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
               
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
               </div>
           
        </form>
          )}

            <button  onClick={() => {
              setToggle(!toggle)
            }}>  {toggle ?<AiOutlineCloseCircle /> : <BiSearchAlt />   }</button>
        
            <HiOutlineShoppingBag />
            <MdOutlinePersonAddAlt1 />

           
            
           
            
            
        </div>

        </div>

       
      </div>

        

      

       <div className='hidden md:flex justify-end   items-center  col-span-1 px-2'>
        <div className='flex gap-5 items-center   cursor-pointer   '>

          {toggle && (
            <form className="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
               
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
               </div>
           
        </form>
          )}

            <button  onClick={() => {
              setToggle(!toggle)
            }}>  {toggle ?<AiOutlineCloseCircle /> : <BiSearchAlt />   }</button>
        
            <HiOutlineShoppingBag />
            <MdOutlinePersonAddAlt1 />

           
           
           
            
            
        </div>

       

       
        </div>

       
        <div className=' md:hidden flex justify-end items-center px-2' onClick={handleclick}>
        {!nav ? <AiOutlineMenu className="cursor-pointer " size={20} /> : <AiOutlineClose className="cursor-pointer" size={20}/>}
            </div>


            <div className={!nav? 'hidden' : 'my-12 absolute bg-white w-full px-8 ' }>
           
            <ul >

                <li className="md:hidden border-b-2 border-zinc-300 w-full py-5">Home</li>
                <li className="md:hidden border-b-2 border-zinc-300 w-full py-5">Shop</li>
                <li className="md:hidden border-b-2 border-zinc-300 w-full py-5">Brand</li>
                <li className="md:hidden border-b-2 border-zinc-300 w-full py-5">Man</li>
                <li className="md:hidden border-b-2 border-zinc-300 w-full py-5">Woman</li>
                <li className="md:hidden w-full py-5">Help</li>
            </ul>
           

            </div>
             
          

    </div>

    

   
  

  
  )
}

export default Navbar