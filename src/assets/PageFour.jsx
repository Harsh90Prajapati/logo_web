import React from "react";
import Testimonial from './Testimonial.json'


function PageFour() {

  return (
    <div className=" bg-cyan-100 py-20 text-center">
      <div className="flex flex-col justify-between items-center h-full gap-20">
      <h1 className=" text-3xl font-semibold text-rose-400 underline">Our Employees</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 max-w-[1124px] mx-auto">
        {Testimonial.map((item)=>{
          return(
            <div className=" flex flex-col justify-center items-center" key={item.id}>
            <div className="bg-white duration-700 p-10 rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:duration-700">
              <div className="text-center font-mono ">
                <h1 className="text-3xl font-semibold text-cyan-500">
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
