'use client'

import { motion, Variants } from "framer-motion";
import Banner from "./subcomponents/banner"
import Me from "./subcomponents/me"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}


export default function About() {
    return (

        <div className="flex flex-col md:gap-15 overflow-hidden select-none">
            <div className="overflow-hidden w-full">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                >
                    <Banner />
                </motion.div>

            </div>
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
                <Me />
            </motion.div>
            <br />
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="w-100 border border-white text-white text-[10px] font-monument uppercase text-center tracking-widest px-2 py-2 mx-auto md:w-auto md:text-[10px] lg:text-[15px] md:-mt-30">
                SELF-TAUGHT IN MOST OF WHAT I KNOW.<br />
                OBSESSED WITH THE SPACE WHERE DESIGN MEETS CODE.
            </motion.div>
        </div>
    )
}