import Image from 'next/image'
import { assets } from '../assets/assets'
import React from 'react'

export const HeroSection = () => {
  return (
    <>
      <div className='layout py-6'>
        <h2 className='text-center'>Mark Okor</h2>
      </div>
      <div className='w-full'>
        <Image
          loading='eager'
          src={assets.eyebox}
          className='w-full h-auto object-cover'
          alt="Eyebox hero image"
        />
      </div>
      <div className='w-full border-b'>
        <div className="md:layout flex flex-col md:flex-row  md:divide-x max-md:divide-y font-light">
          <div className='py-3 md:w-[80%]'>
            <p className='max-md:px-5 w-[90%] md:w-[70%]'>I bridge the gap between elegant frontend design and powerful backend logic, creating full-stack applications that are as functionally robust as they are visually engaging.</p>
          </div>
          
          <ul className='md:pl-3 py-3 max-md:px-5 pb-3 list-none '>
            <li>[ GITHUB ]</li>
            <li>[ LINKEDIN ]</li>
            <li>[ INSTAGRAM ]</li>
          </ul>
        </div>
      </div>
      
    </>
  )
}
