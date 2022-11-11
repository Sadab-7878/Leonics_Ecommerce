import React from "react";

const Pcategory = () => {
  const elements = [
    {
      categoryName: "Television",
      image: "assets/cartsi1/img1.png",
      subtitle: "Best Television you can buy from us",
    },
    {
      categoryName: "Laptop",
      image: "assets/cartsi1/img2.png",
      subtitle: "Buy mobile from us",
    },
    {
      categoryName: "Headphone",
      image: "assets/cartsi1/img3.png",
      subtitle: "Best Headphone you can buy from us",
    },
    {
      categoryName: "Vacuum cleaner",
      image: "assets/cartsi1/img4.png",
      subtitle: "Best Vacuum Cleaner you can buy from us",
    },
    {
      categoryName: "Mobile",
      image: "assets/cartsi1/img5.png",
      subtitle: "Best Mobile you can buy from us",
    },
    {
      categoryName: "Air Condition",
      image: "assets/cartsi1/img6.png",
      subtitle: "Best Air condition you can buy from us",
    },
  ];

  return (
    <div className="py-[50px] px-20 mx-auto">
      <div className=' text-center  md:text-start md:-ml-6  font-["Josefin Sans"]  text-2xl font-bold'>
        Popular Category
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 grid md:grid-cols-3 2xl:grid-cols-6 gap-5">
        {elements.map((element, i) => {
          return (
            <div
              key={i}
              className="shadow-xl my-10  px-2  h-[215px] hover:scale-105 duration-500 rounded-md "
            >
              <div className="flex flex-col items-center pt-8">
                <img src={element.image} alt="" className="h-24" />
              </div>

              <div className="ml-2">
                <div className='font-["Poppins"] font-bold pt-2'>
                  {element.categoryName}
                </div>
                <div className='text-sm text-slate-400 font-["Poppins"]'>
                  {element.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pcategory;
