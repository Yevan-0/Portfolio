"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

export default function Inspiration() {
    const fadeInRight: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const fadeInLeft: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
    }

    const characterPop: Variants = {
        hidden: { opacity: 0, scale: 0.8, x: 20 },
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: "backOut" } }
    }

    return (
        <div className="w-full overflow-x-clip">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex w-full min-h-[320px] items-center justify-center relative overflow-visible pointer-events-none">

                    <div className="filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] flex-[0.6] h-full z-10">
                        <motion.div variants={fadeInRight} className="h-full">
                            <div className="bg-black p-6 w-full h-full [clip-path:polygon(0%_0%,_85%_0%,_100%_100%,_0%_100%)] flex flex-col gap-8">
                                <div className="font-hanson text-strawberry uppercase text-3xl tracking-wider">
                                    Inspiration
                                </div>
                                <div className="font-monument font-bold text-white text-[17px] uppercase flex flex-col gap-10 w-[60%] leading-relaxed">
                                    <span>Between the seen and unseen. Omen's world
                                        of shadow and intent shaped the visual language
                                        of this portfolio.</span>
                                    <span>Dark palette. Sharp edges. No noise. <br />
                                        Inspired by Omen — Valorant's phantom of the rift.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="filter drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] flex-[0.4] h-full relative z-20 -ml-[12%]">
                        <motion.div variants={fadeInLeft} className="h-full">
                            <div className="bg-strawberry flex-1 h-full [clip-path:polygon(9%_0%,_100%_0%,_100%_100%,_37%_100%)] flex flex-col items-end justify-between py-8 pr-70 gap-6 overflow-hidden">
                                <div className="flex gap-4">
                                    {[1, 2, 3, 4].map((id) => (
                                        <div key={id} className="flex items-center justify-center w-10 h-10 relative">
                                            <Image src={`/images/Abilities-${id}.png`} alt="ability" width={40} height={40} className="object-contain" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-end gap-4">
                                    <div className="font-monument text-white uppercase flex flex-col text-right text-[15px] lead">
                                        <span>THE HARBINGER</span>
                                        <span>Valorant Agent — Controller</span>
                                        <span className="mt-10 text-2xl">Omen</span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Image src={'/images/category.png'} alt="category" width={60} height={60} className="object-contain" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={characterPop} className="absolute right-0 lg:-right-10 z-50 -top-20 md:-top-32 lg:-top-40">
                        <Image
                            src={'/images/Omen.png'}
                            alt="Omen"
                            width={300}
                            height={100}
                            className="object-contain pointer-events-none drop-shadow-2xl h-[200px] md:h-[350px] lg:h-[450px] w-auto"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}