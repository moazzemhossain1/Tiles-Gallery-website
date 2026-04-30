import Link from 'next/link';
import React from 'react';

const Naveber = () => {

    
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
                            <Link className='btn  btn-active w-40'  href={"/"}>Home</Link>
                            <Link className='btn  btn-active w-40'  href={"/all-tiles"}>All Tiles</Link>
                            <Link className='btn  btn-active w-40'  href={"/myprofile"}>My Profile</Link>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">Tiles <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">Gallery</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex flex-row gap-8">
                         <Link    className=' font-medium text-xl'  href={"/"}>Home</Link>
                            <Link className=' font-medium text-xl'  href={"/all-tiles"}>All Tiles</Link>
                            <Link className=' font-medium text-xl'  href={"/myprofile"}>My Profile</Link>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>



        </div>
    );
};

export default Naveber;