import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProjectSection = () => {
  return (
    <div className='w-full'>
      <div className="border-y w-full overflow-hidden py-3">
        <div className="w-full overflow-hidden">
          <div className="flex w-max ">
            {[1, 2].map((group) => (
              <div key={group} className="flex shrink-0">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex shrink-0 items-center justify-center gap-10 px-5"
                  >
                    <h2 className="text-4xl md:text-6xl">Projects</h2>
                    <Image
                      loading="eager"
                      src={assets.star}
                      className="size-6 md:size-8 object-cover"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='border-b flex flex-col'>
        <div className="layout py-6 grid md:grid-cols-2 gap-3 items-center">
          <div>
            <Image
              loading='eager'
              src={assets.traffic}
              className='size-auto md:w-150 md:h-100 object-contain'
              alt="Traffi Violation Project Preview Image"
            />
          </div>
          <div className='grid lg:grid-cols-3 justify-items-start items-center gap-3 w-full '>
            <div className='lg:-rotate-90 justify-self-start h-fit shrink-0'>
              <p className='w-max whitespace-nowrap text-sm font-medium text-center'>[ TRAFFIC VIOATION AUTH PROJECT ] <span className='font-light'>[2025]</span></p>
            </div>
            
            <p className='lg:col-span-2'>
              Developed Traffic Violation System, an application that logs traffic offenses and processes payments, by building its backend and APIs using Python, Django, and React JS. I implemented robust, multi-layered authentication flows including Face ID, OTP-based verification, and Google OAuth to ensure secure user access and session management. Additionally, I handled the end-to-end containerization and deployment of the entire application using Docker, ensuring a stable and reliable production environment. <br />  <br />
              <span className='block text-xs'>Read about{" "}
                <Link 
                className='underline' 
                target='_blank' 
                href={'https://medium.com/@okormark/multifactor-authentication-authenticating-user-with-face-id-7a184a605d93'}
                >
                  Face ID,
                </Link>{" "} 
                <Link 
                  target='_blank' 
                  className='underline' 
                  href={'https://medium.com/@okormark/multifactor-authentication-phone-number-otp-verification-with-django-06a89a49ee28'}
                >
                  OTP
                </Link>{" "} 
                and{" "}
                <Link 
                  target='_blank'
                  className='underline' 
                  href={'https://medium.com/@okormark/multifactor-authentication-integrating-google-authenticator-app-with-django-21adc831821e'}
                >
                  Google OAuth
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="layout py-6 grid md:grid-cols-2 gap-3 items-center">
          
          <div className='grid lg:grid-cols-3 justify-items-start items-center gap-3 w-full '>
            <p className='lg:col-span-2 '>
              Built a full-stack e-commerce platform alongside a robust Django backend. On the frontend, I engineered dynamic product displays, full shopping cart functionality, and intuitive user interfaces. For the backend, I also managed the database architecture and implemented secure APIs for product listings, user authentication, and payment gateways. Additionally, I handled cloud infrastructure and deployment, configuring and maintaining the production environment to ensure high-performance data retrieval and security across all devices. <br /> <br />
              <span className='block text-xs '>Read about {" "}
                <Link 
                  className='underline'
                  target='_blank'
                  href={'https://medium.com/@okormark/authcontext-implementing-simple-jwt-on-django-react-app-187aafe39ce7'}>
                  JWT implementation
                </Link>
              </span>
            </p>
            <div className='lg:-rotate-90 max-lg:row-start-1 justify-self-start h-fit shrink-0'>
              <p className='w-max whitespace-nowrap text-sm font-medium text-center'>[ ONLINESHOP ] <span className='font-light'>[2024]</span></p>
            </div>
          </div>
          <div className='max-md:row-start-1'>
            <Image
              loading='eager'
              src={assets.majik1}
              className='size-auto md:w-150 md:h-100 object-contain'
              alt="Traffi Violation Project Preview Image"
            />
          </div>
        </div>
        <div className="layout py-6 grid md:grid-cols-2 gap-3 items-center">
          <div>
            <Image
              loading='eager'
              src={assets.omarko}
              className='size-auto md:w-150 md:h-100 object-contain'
              alt="Traffi Violation Project Preview Image"
            />
          </div>
          <div className='grid lg:grid-cols-3 justify-items-start items-center gap-3 w-full '>
            <div className='lg:-rotate-90 justify-self-start h-fit shrink-0'>
              <p className='w-max whitespace-nowrap text-sm font-medium text-center'>[ OMARKO-GOT-API ] <span className='font-light'>[2023]</span></p>  
            </div>

            <p className='lg:col-span-2'>
              OMARKO-GOT-API is a backend service designed to fetch and store Game of Thrones universe data, using Python and Flask. I built and optimized a high-performance RESTful API that handled complex data retrieval and storage, ensuring quick server response times. By seamlessly integrating this backend with the frontend, I enabled reliable data delivery that supported a highly dynamic and fluid user experience. <br /> <br />
              <span className='block text-xs '>Read{" "}
                <Link 
                  target='_blank' 
                  className='underline'
                  href={'https://github.com/Omarko65/omarko-got-api#omarko-got-api'}
                >
                  doc
                </Link>
                </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
