import React from 'react'


export default function Navbar() {
  return (
    <nav>
      <ul className='list-none grid grid-cols-3 justify-items-center items-center h-12 text-sm divide-x border-b'>
        <li className='w-full text-center self-stretch content-center'>ABOUT</li>
        <li className='w-full text-center self-stretch content-center'>SERVICE</li>
        <li className='w-full text-center self-stretch content-center'>CONTACT</li>
      </ul>
    </nav>
  )
}