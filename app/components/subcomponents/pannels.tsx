import { Project } from '@/types';
import Image from 'next/image';

export default function Pannels({ projects }: { projects: Project[] }) {
  return (
    <div className='flex flex-col gap-10 items-center justify-center flex-wrap'>
      <div className='panels-row flex max-width-1110:flex-col gap-10'>
        {projects.map((proj, i) => (
          <div key={i} className='flex flex-col items-center'>
            {/*card*/}
            <div className='flex items-center justify-center relative group overflow-hidden'>
              <Image
                src={`/images/Project-${i + 1}.png`}
                alt={`Project-${i + 1}`}
                width={300}
                height={500}
                className='object-contain'
              />
              <div className='absolute uppercase text-white bg-strawberry/80 w-full h-10 flex justify-center text-center pt-2 items-center group-hover:opacity-0 transition-opacity duration-300 panels-desktop-only'>
                {proj.title}
              </div>
              {/*hover overlay - desktop*/}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center gap-3 p-4 panels-desktop-only'>
                <Image
                  src={`/images/blur-${i + 1}.png`}
                  alt={`blur-${i + 1}`}
                  fill
                  sizes='300px'
                  className='object-cover filter blur'
                />
                <div className='relative z-10 text-white font-bold text-lg'>{proj.title}</div>
                <div className='relative z-10 text-white text-sm text-center font-poppins font-bold uppercase'>{proj.description}</div>
                <a href={proj.repo} target='_blank' className='z-20 text-cyan-300 font-poppins uppercase underline font-bold'>Go to Repo</a>
                {proj.live && (
                  <a href={proj.live} target='_blank' className='z-20 text-cyan-300 font-poppins uppercase underline font-bold'>Go to Live</a>
                )}
              </div>
            </div>
            {/*mobile info - shown below card*/}
            <div className='panels-mobile-only flex flex-col items-center gap-2 mt-3'>
              <div className='uppercase text-strawberry bg-white p-2 font-bold text-lg'>{proj.title}</div>
              <div className='text-white text-sm text-center font-poppins font-bold px-4 uppercase'>{proj.description}</div>
              <a href={proj.repo} target='_blank' className='text-cyan-300 font-poppins uppercase underline font-bold'>Go to Repo</a>
              {proj.live && (
                <a href={proj.live} target='_blank' className='text-cyan-300 font-poppins uppercase underline font-bold'>Go to Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}