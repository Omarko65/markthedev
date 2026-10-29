import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import ProjectCard from './ui/ExperienceCard'
import ExperienceCard from './ui/ExperienceCard'

export const ExperienceSection = () => {
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
                    <h2 className="text-4xl md:text-6xl">Experience</h2>
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
      <div className='border-b'>
        <ExperienceCard
          title="Areei UK"
          tags={['Web Developer', 'Mar 2025 - Present']}
          descriptions={[
            "Managed the company’s website by updating product listings, adding new products, and carrying out occasional content updates and maintenance to ensure smooth day-to-day operation and a consistent user experience.",
            'Conducted SEO research and implemented data-driven optimisation strategies, including keyword targeting, meta tag refinement, and technical SEO improvements to increase website visibility and organic traffic.',
          ]}
          href="https://areei.uk"
        />
      </div>
      <div className='border-b'>
        <ProjectCard
          title="Pundit Events UK"
          tags={['Web Designer & Brand Designer', 'May 2025 - December 2026']}
          descriptions={[
            "Designed and developed the brand’s website from scratch using React and Tailwind CSS, providing ongoing maintenance to ensure a modern, responsive user experience. Beyond web development, I established the brand's visual identity and curated detailed client mood boards with custom textures and themes.  This streamlined communication, aligned expectations, and effectively showcased the brand's value to prospective clients.",
          ]}
          href="https://www.punditeventuk.com/"
        />

      </div>
      <div>
        <ProjectCard
          title="AnneLouisa Events"
          tags={['Web Developer', 'Aug 2025 - February 2026']}
          descriptions={[
            "Developed a fully responsive event-rental website, employing a mobile-first approach and ensuring optimal cross-device performance. I integrated Supabase to manage the backend, database, and secure data handling, while simultaneously elevating the brand’s digital presence through modern UI/UX design practices that delivered a clean, and engaging user experience..",
          ]}
          href="https://www.annelouisaevents.com/"
        />

      </div>
      
    </div>
  )
}
