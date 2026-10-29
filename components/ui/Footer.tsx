import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center  gap-5'>
      <div className='py-15 text-center'>
        <Image
          loading='eager'
          src={assets.star}
          className='size-6 md:size-8 mx-auto object-cover'
          alt="star icon"
        />
        <h3>Okor Mark</h3>
      </div>
    </footer>
  )
}
