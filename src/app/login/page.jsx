"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Loginepage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }, } = useForm()
    const handledata = async (data) => {
        console.log("data", data);
        const{email,password,photo}=data;



        const { data: res, error } = await authClient.signIn.email({

            email: email,
            password: password,

            rememberMe: true,
            callbackURL: "/"

        })
        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Login successful")
        }

    }
    console.log("errors", errors)
    console.log(watch("email"));
    console.log(watch("password"))




    // const handalilobin=(e)=>{
    //     e.preventDefault();
    //     const email=e.target.email.value;
    //     const password=e.target.password.value;
    //     console.log("email and password:",email,password)
    // }


    return (
        <div className='container mx-auto bg-slate-200 flex justify-center items-center min-h[80vh] p-6 '>
            <div className='p-15 rounded-md bg-white'>
                <h3 className=' text-3xl text-center font-bold'>Logine your  account</h3>
                <form onSubmit={handleSubmit(handledata)} className='py-3 pt-8'>
                    <fieldset className="fieldset">
                        <legend className="font-semibold text-2xl py-3">Email address</legend>

                        <input type="email"
                            {...register("email", { required: "please Enter email!" })}
                            className="input" placeholder="Enter your email address" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="font-semibold text-2xl py-3">Password</legend>
                        <input type="text"
                            {...register("password", { required: "please Enter password!" })}
                            className="input" placeholder="Enter your password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>

                    <button className="btn w-full text-center bg-slate-800 mt-5 text-white">Login</button>


                </form>

                <p className='mt-6'>Dont’t Have An Account ? <Link className='text-red-600' href={"/rigister"}>Register</Link></p>

            </div>

        </div>
    );
};

export default Loginepage;