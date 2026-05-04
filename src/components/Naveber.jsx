"use client"
import React from 'react';
import NaveLinke from './NaveLinke';
import Link from 'next/link';
import { motion } from "motion/react"
import { authClient } from '@/lib/auth-client';
const MotionLink = motion(Link);


const Naveber = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    console.log("user", user)


    return (
        <div className=' bg-base-100 shadow-sm'>

            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col justify-center items-center space-y-3">
                            <NaveLinke className='btn  btn-active w-40' href={"/"}>Home</NaveLinke>
                            <NaveLinke className='btn  btn-active w-40' href={"/all-tiles"}>All Tiles</NaveLinke>
                            <NaveLinke className='btn  btn-active w-40' href={"/myprofile"}>My Profile</NaveLinke>
                        </ul>
                    </div>
                    <MotionLink
                        href="/"

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-ghost text-xl">Tiles <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">Gallery</span></MotionLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex flex-row gap-8">
                        <NaveLinke className=' font-medium text-xl' href={"/"}>Home</NaveLinke>
                        <NaveLinke className=' font-medium text-xl' href={"/all-tiles"}>All Tiles</NaveLinke>
                        <NaveLinke className=' font-medium text-xl' href={"/myprofile"}>My Profile</NaveLinke>

                    </ul>
                </div>
                {user ? <div className="navbar-end flex flex-row gap-4">
                    <h3>Hi,{user.name}</h3>

                    
                    <NaveLinke className=' btn font-medium' href={"login"}><button onClick={async () => await authClient.signOut()}>
                        Logout</button></NaveLinke>

                </div> : <div className=' flex-col justify-center items-center gap-4 pl-25'>
                    <NaveLinke className=' btn font-medium  ' href={"register"}>Sing Up</NaveLinke>

                    <NaveLinke className=' btn font-medium ml-4' href={"login"}>Login</NaveLinke>

                </div>
                }
            </div>



        </div>
    );
};

export default Naveber;