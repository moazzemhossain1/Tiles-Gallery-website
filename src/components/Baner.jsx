import Image from 'next/image';
import React from 'react';
import logo from "@/assets/tiese.jpg"

const Baner = () => {
    return (
        <div className='container mx-auto my-10'>
            <h3 className='text-center my-10 font-bold text-4xl'> <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">This is our product design</span> </h3>
            <div className='flex justify-center items-center'>

                <Image className='rounded-2xl' src={logo} alt='Baner image' width={1200} height={800}></Image>
            </div>

        </div>
    );
};

export default Baner;