import React from "react";
import {MdOutlineEmail , BsWhatsapp, RiMessengerLine } from 'react-icons/all'

const PageFive = () => {
  return (
       <div className="text-center font-sans bg-[url('./assets/img/2.svg')] bg-cover">
        <h5 className="font-medium py-4 text-3xl text-white border-b-2 inline-block">Get In Touch</h5>
        <div className="containor md:flex justify-center items-center gap-3 max-w-[1024px] mx-auto  text-white">
        <div className="flex flex-col  gap-2 p-4">
            <div className='p-4 bg-cyan-400 flex flex-col rounded-lg text-center items-center justify-center hover:border hover:duration-700 duration-700 hover:bg-transparent'>
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>harshprajapti904433@gmail.com</h5>
              <a href="mailto:harshprajapti904433@gmail.com" target="_blank" className="mt-1 inline-block text-lg" rel="noreferrer">Send a Message</a>
            </div>
            <div className='p-4 bg-cyan-400 rounded-lg  flex flex-col items-center justify-center text-center hover:border  hover:duration-700 duration-700 hover:bg-transparent'>
            <RiMessengerLine className='icon' />
              <h4>Messenger</h4>
              <h5>Harsh Prajapati</h5>
              <a href="http://m.me/_harshprajapati_/" target="_blank" rel="noreferrer">Send a Message</a>
            </div>
            <div className='p-4 bg-cyan-400 rounded-lg flex flex-col items-center justify-center  text-center hover:border  hover:duration-700 duration-700 hover:bg-transparent'>
            <BsWhatsapp className='icon' />
              <h4>WhatsApp</h4>
              <h5>+91 8840497081</h5>
              <a href="https://api.whatsapp.com/send?phone=+918840497081" target="_blank" rel="noreferrer">Send a Message</a>
            </div>
          </div>         
          <form className="p-4 flex flex-col gap-2 w-full">
            <input type="text" name='name' placeholder='Your Full Name' required className="w-full p-4 bg-transparent text-white rounded-sm border" />
            <input type="email" name='email' placeholder='Your Email' required  className="w-full p-4 bg-transparent text-white rounded-sm border"/>
            <textarea name="message" rows="7" placeholder=' Your Message' required className="w-full p-4 bg-transparent text-white rounded-sm border resize-none"></textarea>
            <button type='submit' className='bg-cyan-400 w-full py-2 rounded-md'>Send Message</button>
          </form>
        </div>
       
      </div>
  );
};

export default PageFive;
