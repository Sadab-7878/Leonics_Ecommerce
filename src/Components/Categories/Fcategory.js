import React from 'react'




const Fcategory = () => {

    const elements = [
        {
            categoryName: '55 "4K Neo QLED TV ultra slim design',
          image1: "assets/cartsi1/img1.png",
          image2: "assets/cartsi1/pic2.png",
          image3: "assets/cartsi1/picl.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
         
        },
        {
            categoryName: 'Noise-reducing wireless headphones',
          image1: "assets/cartsi1/img2.png",
          image2: "assets/cartsi1/pic5.png",
          image3: "assets/cartsi1/picm.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Sony WH-1000XM4 - Black   Art.nr: 1013565",
       
        },
   
     
        {
          categoryName: '55 "4K Neo QLED TV ultra slim design',
          image1: "assets/cartsi1/img3.png",
          image2: "assets/cartsi1/pic2.png",
          image3: "assets/cartsi1/picxl.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Andersson Robot  RVC 2.0  Art.nr: 1009238",
 
        },
        {
          categoryName: 'Xiaomi Lite MI 4 5G "6.67 inch design foldable',
          image1: "assets/cartsi1/img4.png",
          image2: "assets/cartsi1/pic5.png",
          image3: "assets/cartsi1/picu.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
 
        },
        {
          categoryName: '55 "4K Neo QLED TV ultra slim design',
          image1: "assets/cartsi1/img5.png",
          image2: "assets/cartsi1/pic2.png",
          image3: "assets/cartsi1/picl.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
 
        },

        {
          categoryName: '55 "4K Neo QLED TV ultra slim design',
          image1: "assets/cartsi1/img5.png",
          image2: "assets/cartsi1/pic5.png",
          image3: "assets/cartsi1/picl.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
 
        },

        {
          categoryName: '55 "4K Neo QLED TV ultra slim design',
          image1: "assets/cartsi1/img5.png",
          image2: "assets/cartsi1/pic2.png",
          image3: "assets/cartsi1/picm.png",
          image4: "assets/cartsi1/pic4.png",
          subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
 
        },

        {
          categoryName: 'Noise-reducing wireless headphones',
        image1: "assets/cartsi1/img2.png",
        image2: "assets/cartsi1/pic5.png",
        image3: "assets/cartsi1/picxl.png",
        image4: "assets/cartsi1/pic4.png",
        subtitle:"Sony WH-1000XM4 - Black   Art.nr: 1013565",
     
      },

      {
        categoryName: '55 "4K Neo QLED TV ultra slim design',
      image1: "assets/cartsi1/img1.png",
      image2: "assets/cartsi1/pic2.png",
      image3: "assets/cartsi1/picu.png",
      image4: "assets/cartsi1/pic4.png",
      subtitle:"Samsung QE55QN85 AATXArt.nr: 1016713",
     
    },

    {
      categoryName: 'Noise-reducing wireless headphones',
    image1: "assets/cartsi1/img2.png",
    image2: "assets/cartsi1/pic5.png",
    image3: "assets/cartsi1/picl.png",
    image4: "assets/cartsi1/pic4.png",
    subtitle:"Sony WH-1000XM4 - Black   Art.nr: 1013565",
 
  },

    
      ];
  return (
    <div className='container  py-[50px] mx-auto'>
        <div className='flex flex-col items-center md:flex md:flex-row md:justify-between max-w-[1240px] mx-auto '>
        <div className='2xl:-ml-20  font-["Josefin Sans"]  text-2xl font-bold'>Featured Categories</div>
        <div className='flex gap-10 mt-2 cursor-pointer font-bold 2xl:-mr-20'>
            <ul>All</ul>
            <ul>Television</ul>
            <ul>Mobile</ul>
            <ul>Headphone</ul>
        </div>
        </div>

        <div className='container max-w-[1240px]  mx-auto     mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-5  2xl:gap-10 '>
       

            {elements.map((element, i) => {
                return(
                    <div key={i}  className='shadow-xl my-5  h-[340px]  w-60 hover:scale-105 duration-500 rounded-2xl  mx-auto'>

                    <div className='relative'>
                            <img src={element.image1} alt="" className='mx-auto h-36 pt-2 w-auto'/>
                    
                            <div className='absolute top-2 right-2'>
                            <img src={element.image2} alt="" className='h-4'/>

                          
                            </div>

                            <div className='flex  justify-between px-2 pt-4 '>
                            
                            <p key={i} className='text-[12px] font-bold '>{element.categoryName} </p>
                            
                        

                            
                            
                          

                           
                               <img src={element.image3} alt="" className='h-7'/>

                            </div>
                         

                          
                            <div className='text-[12px] px-2 pt-2 text-slate-400 font-bold'>
                            {element.subtitle}
                            </div>
                          

                            <div >
                            <img src={element.image4} alt="" className='w-24 px-1 pt-2 h-6'/>
                            </div>
                    
                            
                            <div className=' pt-7 flex justify-between items-center px-2 '>
                                <div>
                    
                              
                                <div className='  text-sm font-bold'>$334</div>
                                </div>
                    
                                <div className='mt-2'>
                                    
                    <button className='border px-2 py-1 items-center text-[13px] font-bold text-center rounded-md bg-gradient-to-r from-cyan-400 to-cyan-100'>Add to Cart</button>
                                </div>
                            </div>
                            
                            </div>
                          

                           
                        
                     
                    </div>
                );
            })}



                
          
              


                
       
    </div>
    </div>
  )
}

export default Fcategory