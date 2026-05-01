import Image from 'next/image';
import React from 'react';
import logo1 from "@/assets/tiese.jpg"
import Link from 'next/link';

const ProductCard = ({prodect}) => {
    const {title,description,image,category,price,currency,material,dimensions,inStock}=prodect;

    
    return (
        <div className=' '>
            <div className='bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#6a11cb] rounded-xl '>
               <div className='flex justify-center items-center'>
                 <Image className='p-3 rounded-2xl' src={logo1} alt='card image' width={400} height={400}></Image>
               </div>
               <div className='space-y-3 pl-3 mt-4'>
                <h3 className='font-bold text-white text-xl'>Title:{title}</h3>
                <h3 className='text-white  font-medium text-xl'>{category}</h3>
              
                <p>{}</p>
               </div>
               {/* {`/news/${news._id}`} */}
               <div className='flex justify-between items-center p-3 mb-6'>
                <p className='text-3xl font-medium text-white'>${price}</p>
                <Link href={"/singletiles"} className="btn">Vie detieles</Link>
               </div>

            </div>
    
            
        </div>
    );
};

export default ProductCard;