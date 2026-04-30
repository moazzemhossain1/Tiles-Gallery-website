"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const NaveLinke = ({href,children,className}) => {
    const pathename=usePathname();
    console.log("patename",pathename);
    const isActive=href === pathename;
    

   

    console.log("pathename",pathename)
    return (
        <Link className={`${isActive  ? "text-blue-500" :""} ${className}`} href={href}>
            {children}
        </Link >
    );
};

export default NaveLinke;