import React from "react";

const PageThree = () => {
  return (
    <div className="h-full w-full bg-emerald-50 flex justify-center items-center mt-[-40px] sm:mt-[-55px]">
      <div className="max-w-[1000px] mx-auto my-[100px]">
        <div className="text-center  p-10">
          <h1 className="sm:text-4xl text-2xl font-semibold text-rose-400">Trusted By Many Users Across the World</h1>
          <p className="sm:text-base text-xs  mt-5 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            fuga pariatur officiis vero labore repellat nobis sequi nisi eum
            tenetur odit id sed debitis iure deserunt dolorem commodi ipsa quis.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-2 m-10">
          <div className="sm:p-10 p-5 bg-white text-center rounded-md shadow-sm hover:shadow-lg hover:duration-700 hover:border-2 duration-700 ">
            <h1 className="text-4xl font-bold text-emerald-500">100%</h1>
            <p className="sm:text-sm text-xs mt-2 font-medium text-gray-500">Completion</p>
          </div>
          <div className="sm:p-10 p-5  bg-white text-center rounded-md shadow-sm hover:shadow-lg hover:duration-700 hover:border-2 duration-700 ">
            <h1 className="text-4xl font-bold text-emerald-500">24/7</h1>
            <p className="sm:text-sm text-xs mt-2 font-medium text-gray-500">Service</p>
          </div>
          <div className="sm:p-10 p-5 bg-white text-center rounded-md shadow-sm hover:shadow-lg hover:duration-700 hover:border-2 duration-700 ">
            <h1 className="text-4xl font-bold text-emerald-500">100k</h1>
            <p className="sm:text-sm text-xs mt-2 font-medium text-gray-500">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
