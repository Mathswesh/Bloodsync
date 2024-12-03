import React from 'react'

export const Footer = () => {
  return (
    <div class="font-serif text-white p-3 grid grid-cols-4 grid-rows-1  bg-gradient-to-r from-[#6f0000] to-[#200122]">
        <div class="items-center justify-center flex col-span-1 row-span-1">
            <ul className='text-[20px]'>
                <li className='mb-3'>About us <div className='w-[80px] h-[2px] bg-red-600'></div></li>
                <li className='mt-2'>What we Ofer</li>
                <li className='mt-2'>Privacy</li>
                <li className='mt-2'>Terms and Conditions</li>
            </ul>
        </div>
        <div class="items-center justify-center flex col-span-1 row-span-1">
            <ul className='text-[20px]'>
                <li className='mb-3'>Content <div className='w-[70px] h-[2px] bg-red-600'></div></li>
                <li className='mt-2'>News</li>
                <li className='mt-2'>Blog</li>
                <li className='mt-2'>Graph</li>
            </ul>
        </div>
        <div class="items-center justify-center flex col-span-1 row-span-1">
            <ul className='text-[20px]'>
                <li className='mb-3'>Resources <div className='w-[90px] h-[2px] bg-red-600'></div></li>
                <li className='mt-2'>Faqs</li>
                <li className='mt-2'>Contact us</li>
                <li className='mt-2'>Link</li>
            </ul>
        </div>
        <div class="items-center justify-center flex col-span-1 row-span-1">
            <ul className='text-[20px]'>
                <li className='mb-3'>Follow us<div className='w-[85px] h-[2px] bg-red-600'></div></li>
                <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-instagram"></i></li>
                <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-linkedin"></i></li>
                <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-github"></i></li>
            </ul>
        </div>
        <div class="items-center justify-center flex col-span-full text-[17px] text-white">&copy; Copyright Claimed 2024</div> 
    </div>
  )
}
