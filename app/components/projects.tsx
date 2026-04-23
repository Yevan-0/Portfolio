'use client'
import { Project } from '@/types';
import { motion, Variants } from "framer-motion";
import Pannels from "./subcomponents/pannels"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <motion.div
        className="w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
        <div className='text-[32px] uppercase text-white text-center'>
          Projects
        </div>
      </motion.div>
      <motion.div
        className="w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
        <Pannels projects={projects} />
      </motion.div>
    </div>
  )
}