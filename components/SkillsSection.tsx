import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const SkillsSection = () => {
  return (
    <div className='layout flex flex-col md:flex-row md:justify-between gap-10 py-12'>
      <div className='md:w-1/3'>
        <h2>Skills</h2>
        <p>
          Throughout my journey as a full-stack developer, I have focused on honing my skills across both frontend and backend technologies. From architecting secure APIs to designing responsive user interfaces, here is the core tech stack I use to bring ideas to life.
        </p>
      </div>
      <div className="md:w-1/2">
        <ul className='list-none divide-y'>
          <li className='text-sm font-light py-4 flex justify-between'>
            Javascript (React, NextJS, Node, etc)
            <Image
              loading='eager'
              src={assets.level35}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
          <li className='text-sm font-light py-4 flex justify-between'>
            Python (Django, Flask, etc)
            <Image
              loading='eager'
              src={assets.level3}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
          <li className='text-sm font-light py-4 flex justify-between'>
            HTML/CSS (Tailwind)
            <Image
              loading='eager'
              src={assets.level35}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
          <li className='text-sm font-light py-4 flex justify-between'>
            SQL (PostgreSQL)
            <Image
              loading='eager'
              src={assets.level3}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
          <li className='text-sm font-light py-4 flex justify-between'>
            Docker
            <Image
              loading='eager'
              src={assets.level2}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
          <li className='text-sm font-light py-4 flex justify-between border-b'>
            Branding & Graphics
            <Image
              loading='eager'
              src={assets.level3}
              className='w-31.25 h-4.5 object-cover'
              alt="arrow icon"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
