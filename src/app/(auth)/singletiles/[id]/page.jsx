import React from 'react';

const Single = async ({ params }) => {
    console.log("params",params);
    const {id}=await params;
    console.log("id",id)

    //  const res = await fetch(
    //     `https://openapi.programming-hero.com/api/news/${id}`
    // );

    // const data = await res.json();
    

  const res = await fetch(`https://tiles-server1.onrender.com/prouducts/${id}`);
    const data = await res.json();

    console.log("data", data);

    return (
        <div className='container mx-auto'>
            <h3>{data.title}</h3>
        </div>
    );
};

export default Single;