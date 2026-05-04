import Baner from '@/components/Baner';
import Footer from '@/components/Footer';
import Naveber from '@/components/Naveber';
import React from 'react';

const mainelayout = ({children}) => {
    return (
        <div>
            <Naveber></Naveber>

            
            <Baner></Baner>
            
            {children}
        </div>
    );
};

export default mainelayout;