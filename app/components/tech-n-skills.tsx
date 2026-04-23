'use client'
import { motion, Variants } from "framer-motion";
import Technologies from "./subcomponents/technologies"
import Skills from "./subcomponents/skills"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function Tech_n_Skills() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
        <Technologies />
      </motion.div>
      <motion.div
        className="w-full"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}>
        <Skills />
      </motion.div>
    </div>
  )
}