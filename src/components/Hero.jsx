import React from 'react'
import { HERO_CONTENT } from '../content'
import profilePic from '../assets/profile.jpg'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 1.5 }
    }
});

function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 mt-24 lg:mt-32'> {/* Adjust this margin as needed */}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-8">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-4 text-4xl lg:text-6xl font-thin tracking-tighter'>
                        Ragavallika Alla
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
                        C++ Developer and Front End Developer
                    </motion.span>
                    <motion.p
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="my-4 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center p-7">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        src={profilePic}
                        alt="Ragavallika Alla"
                        className="w-full h-auto max-w-xs lg:max-w-md rounded-full border-4 border-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;
