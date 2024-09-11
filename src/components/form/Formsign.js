import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
const Formsign = () => {
    
    //  --------- validate form NO lib
    // const validate = (values) => {
    //     const error = {}
    //     if (!values.firstName) {
    //         error.firstName = "Required"
    //     } else if (values.firstName.length > 20) {
    //         error.firstName = "Firstname must be 20 character or less"
    //     }
    //     if (!values.lastName) {
    //         error.lastName = "Required"
    //     } else if (values.lastName.length > 20) {
    //         error.lastName = "LastName must be 20 character or less"
    //     }
    //     return error;
    // }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        // ---- validate with Yup lib
        validationSchema : Yup.object({
            firstName: Yup.string().max(20,"Firstname must be 20 character or less").required("Required"),
            lastName: Yup.string().max(20,"Firstname must be 20 character or less").required("Required"),
            email: Yup.string().email("Email Not Valid").required("Required"),
            passWord: Yup.string().min(6,"PassWord at least 6 character").required("Required"),

        }),
        onSubmit : values =>{
            console.log('Form values', values);
        }
    })
    // console.log("thisformik", formik);

    return (
        <form autoComplete='off' onSubmit={formik.handleSubmit} className='w-full max-w-[500px] p-10 mx-auto'>
            <div className='flex flex-col gap-2'>

                <label htmlFor="firstName" className='font-semibold mt-5'>First Name</label>
                <input autoComplete='off' type='text' id='firstName' placeholder='Enter Your First Name' className='p-4 rounded-sm border border-gray-200' {...formik.getFieldProps("firstName")} ></input>
                {formik.touched.firstName && formik.errors.firstName ? <div className='text-red-700'>{formik.errors.firstName}</div> : ""}

                <label htmlFor="lastName" className='font-semibold mt-5'>Last Name</label>
                <input autoComplete='off' type='text'
                    id='lastName' placeholder='Enter Your Last Name' className='p-4 rounded-sm border border-gray-200' {...formik.getFieldProps("lastName")}></input>
                {formik.touched.lastName && formik.errors.lastName ? <div className='text-red-700'>{formik.errors.lastName}</div> : ""}

                <label htmlFor="email" className='font-semibold mt-5'>Your Email</label>
                <input autoComplete='off' type='text'
                    id='email' placeholder='Your Email' className='p-4 rounded-sm border border-gray-200' {...formik.getFieldProps("email")}></input>
                {formik.touched.email && formik.errors.email ? <div className='text-red-700'>{formik.errors.email}</div> : ""}

                <label htmlFor="passWord" className='font-semibold mt-5'>Your Password</label>
                <input autoComplete='off' type='text'
                    id='passWord' placeholder='Your Password' className='p-4 rounded-sm border border-gray-200' {...formik.getFieldProps("passWord")}></input>
                {formik.touched.passWord && formik.errors.passWord ? <div className='text-red-700'>{formik.errors.passWord}</div> : ""}



                <button type='submit' className='p-4 bg-blue-600 text-white text-10 rounded-lg'>Submit</button>
            </div>
        </form>
    );
};

export default Formsign;