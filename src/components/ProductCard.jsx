import Image from 'next/image';
import React from 'react';

const ProductCard = ({prodect}) => {
    const {title,description,image,category,price,currency,material,dimensions,inStock}=prodect;

    
    return (
        <div className='container mx-auto bg-gray-200'>
            <div className='w-[600] rounded-xl'>
                <div>
                   <Image></Image>
                </div>

            </div>
            
        </div>
    );
};

export default ProductCard;