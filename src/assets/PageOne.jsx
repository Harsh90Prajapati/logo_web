import React from "react";
import Space from './img/pixel.svg'

const PageOne = () => {
  return (
    <div className="bg-pink-100 flex justify-center items-center h-[800px] sm:h-[700px] shadow-md rounded-b-md">
      <div className="sm:flex-row flex flex-col items-center justify-evenly w-full mx-4 sm:mx-0  ">
        <img src={Space} alt="image" className="sm:w-[50%]" />
        <div className="mt-5 sm:mt-0 sm:w-[40%] ">
          <h1 className="text-2xl md:text-4xl font-semibold text-rose-400">Hey EveryOne.</h1>
          <p className="pt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            perferendis consequatur porro labore sed vero, mollitia, molestiae
            voluptatem repellat autem quos odio. Obcaecati quod mollitia veniam
            exercitationem harum vel reiciendis!
          </p>
          <button className='bg-rose-500 text-white w-[50%] mt-5 py-2 rounded-xl font-medium hover:bg-transparent hover:border-2 hover:border-rose-500 hover:text-rose-500'>Sign In</button>
        </div>

      </div>
    </div>
  );
};

export default PageOne;
