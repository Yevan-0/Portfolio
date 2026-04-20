"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
}

const characterPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 20 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: "backOut" } }
}

export default function Inspiration() {

  return (
    <div className="w-full overflow-x-clip">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{}}
      >
        <div className="flex flex-col xl:flex-row w-full min-h-[220px] xl:min-h-[320px] items-stretch relative overflow-hidden xl:overflow-visible pointer-events-none">

          {/* Left black panel */}
          <div className="filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] xl:flex-[0.6] h-full z-10">
            <motion.div variants={fadeInRight} className="h-full transform-gpu">
              <div className="bg-black p-3 xl:p-6 w-full h-full xl:[clip-path:polygon(0%_0%,_85%_0%,_100%_100%,_0%_100%)] flex flex-col gap-7 items-center xl:items-start">
                <div className="text-center font-hanson text-strawberry uppercase text-xl xl:text-3xl tracking-wider">
                  Inspiration
                </div>
                <div className="font-monument font-medium text-white text-[13px] sm:text-[15px] text-center xl:text-left uppercase flex flex-col gap-10 w-[80%] xl:w-[60%] tracking-widest">
                  <span>Between the seen and unseen. Omen's world
                    of shadow and intent shaped the visual language
                    of this portfolio.</span>
                  <span>Dark palette. Sharp edges. No noise. <br />
                    Inspired by Omen — Valorant's phantom of the rift.</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right strawberry panel */}
          <div className="flex xl:flex-[0.4] items-stretch xl:-ml-[12%] relative">
            <div className="filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.5)] flex-1">
              <motion.div variants={fadeInLeft} className="h-full transform-gpu">
                <div className="bg-strawberry flex-1 h-full xl:[clip-path:polygon(15%_0%,_100%_0%,_100%_100%,_42%_100%)] flex flex-col justify-between py-8 px-6 xl:pl-[30%] xl:pr-10 gap-6">
                  <div className="flex gap-4">
                    {[1, 2, 3, 4].map((id) => (
                      <div key={id} className="flex items-center justify-center w-10 h-10 relative">
                        <Image
                          src={`/images/Abilities-${id}.png`}
                          alt="ability"
                          width={40}
                          height={40}
                          className="object-contain" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-monument text-white uppercase flex flex-col text-[13px] sm:text-[15px] text-left xl:text-right xl:pr-[55%] lead">
                      <span>THE HARBINGER</span>
                      <span>Agent — Controller</span>
                      <span className="mt-6 xl:mt-10 text-xl xl:text-2xl">Omen</span>
                    </div>
                    <div className="flex items-center xl:justify-end xl:mr-[55%]">
                      <Image src={'/images/category.png'}
                        alt="category"
                        width={60}
                        height={60}
                        className="object-contain" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Character image */}
            <motion.div
              variants={characterPop}
              className="absolute right-0 bottom-0 z-50 pointer-events-none"
              style={{ willChange: 'transform' }}>
              <Image
                src={'/images/Omen.png'}
                alt="Omen"
                width={300}
                height={100}
                className="object-contain pointer-events-none drop-shadow-2xl h-[300px] sm:h-[320px] xl:h-[450px] w-auto"
                loading="eager"
              />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}