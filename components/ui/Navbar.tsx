import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <nav>
      <ul className='list-none grid grid-cols-3 justify-items-center items-center h-12 text-sm divide-x border-b'>
        <li className='w-full text-center self-stretch content-center'><Link href={'#about'}>ABOUT</Link></li>
        <li className='w-full text-center self-stretch content-center'><Link href={'#service'}>SERVICES</Link></li>
        <li className='w-full text-center self-stretch content-center'><Link href={'#contact'}>CONTACT</Link></li>
      </ul>
    </nav>
  )
}