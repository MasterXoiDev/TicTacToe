import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const Formreacthook = () => {

    const schema = yup.object({
        firstName : yup.string().required("please enter your last name").max(10),
        lastName : yup.string().required("please enter your last name").max(10),
        email : yup.string().required("enter Your Mail").email(),
        passWord : yup.string().required("enter Your passWord").max()
    })
    const { register, handleSubmit, watch, formState: {errors}, } = useForm({resolver: yupResolver(schema)})
    const watchShow = watch("show", false)
    const onSubmit = (values) =>{
        console.log(values);    
    }
    console.log(errors);
    
   
    return (

        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[500px] p-10 mx-auto'>
        <div className='flex flex-col gap-2'>

            <label htmlFor="firstName" className='font-semibold mt-5'>First Name</label>
            <input autoComplete='off' type='text' id='firstName' placeholder='Enter Your First Name' className='p-4 rounded-sm border border-gray-200' {...register("firstName")} ></input>
            {errors?.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}


            <label htmlFor="lastName" className='font-semibold mt-5'>Last Name</label>
            <input autoComplete='off' type='text' id='lastName' placeholder='Enter Your Last Name' className='p-4 rounded-sm border border-gray-200' {...register("lastName")}></input>
            {errors?.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}

            <label htmlFor="email" className='font-semibold mt-5'>Your Email</label>
            <input autoComplete='off' type='email' id='email' placeholder='Your Email' className='p-4 rounded-sm border border-gray-200' {...register("email")} ></input>
            {errors?.email && <div className='text-red-500'>{errors.email.message}</div>}

            <label htmlFor="passWord" className='font-semibold mt-5'>Your Password</label>
            <input autoComplete='off' type='password' id='passWord' placeholder='Your Password' className='p-4 rounded-sm border border-gray-200' {...register("passWord")}></input>
            {errors?.passWord && <div className='text-red-500'>{errors.passWord.message}</div>}

            {/* test watch trong react hook  */}
            {/* <input type="checkbox" className='' {...register("show")} ></input>
            {watchShow && <input type='text' placeholder='enter your age' className=''></input>} */}

            <button type='submit' className='p-4 bg-blue-600 text-white text-10 rounded-lg'>Submit</button>
        </div>
    </form>
    );
};

export default Formreacthook;