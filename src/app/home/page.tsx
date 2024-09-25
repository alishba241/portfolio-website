import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HomePage() {
  return (
    <div className='flex flex-col-reverse  md:flex-row'>
      <div className='mt-[120px] text-white mx-4 md:mx-[80px]'>
        <h2 className='text-2xl font-bold text-white font-sans inline'>Hello, It&#39;s Me</h2><br />
        <h2 className='text-3xl md:text-[40px] font-bold text-white font-sans mt-2  inline '>Alishba Naveed</h2><br />
        <p className='text-xl md:text-2xl font-bold text-white font-sans inline-block mt-2'>And I&#39;m</p>
        <p className='inline text-xl md:text-2xl font-bold text-cyan-300 font-sans animate-rub-effect'> Frontend Developer</p>
        <br />
        <div className='mt-[50px] flex flex-col md:flex-row'>
          <Link href='https://www.linkedin.com/in/alishba-naveed-a9ab38251/' target='_blank'>
            <button className='mb-4 md:mb-0 md:mr-[40px] bg-cyan-300 px-7 py-2 rounded-full text-[#20242d] font-bold shadow-sm shadow-cyan-700 text-sm hover:bg-white duration-500 ease-in'>Linkedin</button>
          </Link>
          <Link href='https://github.com/alishba241?tab=repositories' target='_blank'>
            <button className='bg-cyan-300 px-7 py-2 rounded-full text-[#20242d] font-bold text-sm shadow-sm shadow-cyan-700 hover:bg-white duration-500 ease-in'>GitHub</button>
          </Link>
        </div>
      </div>
      <div className='flex justify-center md:justify-end mt-[90px] mx-4 md:ml-[40%] '>
        <div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] shadow-cyan-300 rounded-full shadow-xl'>
          <Image
            src='/images__29_-removebg-preview (1).png' 
            alt='profile photo'
            className='rounded-full object-cover'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
