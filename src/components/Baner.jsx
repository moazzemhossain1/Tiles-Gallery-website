"use client"

import Image from 'next/image';
import React from 'react';
import logo from "@/assets/tiese.jpg"
import { motion } from "motion/react"

const Baner = () => {
    return (
        <div


            className='container mx-auto my-10'>
            <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='text-center my-10 font-bold text-4xl'> <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">This is our product design</span> </motion.h3>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex justify-center items-center'>

                <Image className='rounded-2xl' src={logo} alt='Baner image' width={1200} height={800}></Image>
            </motion.div>

        </div>
    );
};

export default Baner;