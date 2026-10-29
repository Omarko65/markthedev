import React from 'react'

const WhatIDoSection = () => {
  return (
    <div className='layout py-12 flex flex-col gap-6 items-center justify-center'>
      <p>Here is how I can help</p>
      <section className='flex flex-col gap-6 items-center justify-center text-center'>
        <div> 
          <h2>Development</h2>
          <p className='text-sm leading-loose'>
            <span className='text-nowrap'>[ REACT WEBSITES ]</span>{"  "} 
            <span className='text-nowrap'>[ API DEVELOPMENT ]</span>{"  "} 
            <span className='text-nowrap'>[ FULL-STACK APPLICATIONS ]</span>
          </p>
        </div>
        <div>
          <h2>UI/UX</h2>
          <p className='text-sm leading-loose'>
            <span className='text-nowrap'>[ RESPONSIVE INTERFACES ]</span>{"  "}
            <span className='text-nowrap'>[ USER EXPERIENCE DESIGN ]</span>{"  "}
            <span className='text-nowrap'>[ DESIGNS SYSTEMS ]</span>
          </p>
        </div>
        <div>
          <h2>BRAND DESIGN</h2>
          <p className='text-sm leading-loose'>
            <span className='text-nowrap'>[ BRAND IDENTITY ]</span>{"  "}
            <span className='text-nowrap'>[ EVENT MOODBOARDS ]</span>{"  "}
            <span className='text-nowrap'>[ VISUAL GUIDELINES ]</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default WhatIDoSection