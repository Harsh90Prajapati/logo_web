import React from "react";
import Testimonial from './Testimonial.json'


function PageFour() {

  return (
    <div className=" bg-cyan-100 py-10 text-center">
      <div className="flex flex-col justify-between items-center h-full gap-20">
      <h1 className=" text-3xl font-semibold text-rose-400 underline">Our Employees</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 max-w-[1124px] mx-auto">
        {Testimonial.map((item)=>{
          return(
            <div className=" flex flex-col justify-center items-center" key={item.id}>
            <div className="p-1 bg-white rounded-full mb-[-60px] z-10 flex justify-center items-center ">
              <img src={item.Image} alt="photo" className="w-32 h-32 rounded-full" />
            </div>
            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl hover:duration-700">
              <div className="text-center font-mono">
                <h1 className="text-2xl font-semibold text-cyan-500 pt-5">
                  {item.Name}
                </h1>
                <p className="mt-4 text-xs">
                  {item.des}
                </p>
              </div>
            </div>
          </div>    
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default PageFour;
