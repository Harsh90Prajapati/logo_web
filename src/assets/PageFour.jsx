import React from "react";
import Cat from "./img/1.jpg";
function PageFour() {
  return (
    <div className=" bg-cyan-100 py-10 text-center">
      <div className="flex flex-col justify-between items-center h-full gap-20">
      <h1 className=" text-3xl font-semibold text-rose-400">OUR Employees</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 max-w-[1124px] mx-auto">
        <div className=" flex flex-col justify-center items-center">
          <div className="p-1 bg-white rounded-full mb-[-60px] z-10 bg-cover ">
            <img src={Cat} alt="photo" className="rounded-full w-32 h-32" />
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-center font-mono">
              <h1 className="text-2xl font-semibold text-cyan-500 pt-5">
                Harsh Prajapati
              </h1>
              <p className="mt-4 text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur aliquid placeat veniam sapiente, sed laboriosam
                ratione perferendis at perspiciatis ducimus eius architecto
                molestias rerum minima, voluptas, earum consequatur a quibusdam?
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="p-1 bg-white rounded-full mb-[-60px] z-10 bg-cover ">
            <img src={Cat} alt="photo" className="rounded-full w-32 h-32 " />
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-center font-mono">
              <h1 className="text-2xl font-semibold text-cyan-500 pt-5">
                Harsh Prajapati
              </h1>
              <p className="mt-4 text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur aliquid placeat veniam sapiente, sed laboriosam
                ratione perferendis at perspiciatis ducimus eius architecto
                molestias rerum minima, voluptas, earum consequatur a quibusdam?
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="p-1 bg-white rounded-full mb-[-60px] z-10 bg-cover ">
            <img src={Cat} alt="photo" className="rounded-full w-32 h-32 " />
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md">
            <div className="text-center font-mono">
              <h1 className="text-2xl font-semibold text-cyan-500 pt-5">
                Harsh Prajapati
              </h1>
              <p className="mt-4 text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur aliquid placeat veniam sapiente, sed laboriosam
                ratione perferendis at perspiciatis ducimus eius architecto
                molestias rerum minima, voluptas, earum consequatur a quibusdam?
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PageFour;
