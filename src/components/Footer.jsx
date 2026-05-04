import Link from 'next/link';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div  className=' w-full  bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#6a11cb]'>
            <div className='   py-6'>
            <h3 className='text-center font-extrabold text-4xl my-4 text-white'>Tiles Gallery</h3>
            <p className='text-center text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className=' flex-col justify-center items-center space-y-3 my-3'>
                <p className='text-center text-white '>Social Links</p>
                <div className='flex justify-center items-center gap-3'>
                     <Link
                            href="https://github.com/"
                            target="_blank"
                            className='text-white text-2xl font-bold hover:text-yellow-300'
                        >
                            <FaGithub />
                        </Link>

                        <Link
                              href={"https://www.facebook.com/"}
                              target='_blank'
                              className='text-white text-2xl font-bold hover:text-yellow-300'
                    
                        >
                            <FaFacebook />

                        </Link>

                        <Link
                              href={"https://www.youtube.com/"}
                              target='_blank'
                               className='text-white text-2xl font-bold hover:text-yellow-300'
                        >
                            <FaYoutube/>

                        </Link>
                </div>

                <div className='border w-full text-white my-4'></div>
            </div>

            <div className='container mx-auto grid sm:grid-cols-1 justify-center items-center lg:grid-cols-2  justify-between items-center'>
                <div className=''>
                    <h3 className=' flex justify-center items-center  gap-3 text-white'><CiMail />moazzemhossainallel202025@gmail.com</h3>
                </div>
                <div className='flex justify-center items-center  gap-3 my-5 '>
                    <h3 className='text-white'>Privacy Policy   </h3>
                    <h3 className='text-white'>Terms of Service   </h3>
                    <h3 className='text-white'>   Cookies</h3>
                </div>
            </div>
            
        </div>

        </div>
    );
};

export default Footer;