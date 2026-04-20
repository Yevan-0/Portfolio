'use client'
import { motion, useAnimation, Variants } from "framer-motion"
import { useEffect, useState } from "react"

const COUNT = 6;

const sideLeft: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const sideRight: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (COUNT - 1) * 0.1 + 0.5 } }
}

const staggerLeft: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, staggerDirection: 1 } }
}

const staggerRight: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
}

export default function Welcom() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      controls.set('hidden')
      await controls.start('visible')
    }

    animate()
    const id = setInterval(animate, 3500)
    return () => clearInterval(id)
  }, [controls])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden pointer-events-none">
      <div className="flex items-center text-[20px] text-2xl sm:text-3xl lg:text-6xl gap-1 md:gap-2 font-hanson">
        <motion.div
          className="flex items-center gap-1 md:gap-2"
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            variants={staggerLeft}
            animate={controls}
            initial="hidden"
            className="flex items-center gap-2"
          >
            {Array.from({ length: COUNT }).map((_, i) => (
              <motion.div key={i} variants={sideLeft} className="text-white">
                {'>'}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scaleIn}
            animate={controls}
            initial="hidden"
            className="text-white gap-2"
          >
            WELCOME
          </motion.div>

          <motion.div
            variants={staggerRight}
            animate={controls}
            initial="hidden"
            className="flex items-center gap-2"
          >
            {Array.from({ length: COUNT }).map((_, i) => (
              <motion.div key={i} variants={sideRight} className="text-white">
                {'<'}
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}