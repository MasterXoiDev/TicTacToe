import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
const Formsignrefactor = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(20, "Firstname must be 20 character or less").required("Required"),
                lastName: Yup.string().max(20, "Firstname must be 20 character or less").required("Required"),
                email: Yup.string().email("Email Not Valid").required("Required"),
                password: Yup.string().min(6, "PassWord at least 6 character").required("Required"),
            })}
            onSubmit={(values) => {
                console.log(values);
            }} >
            <Form className='w-full max-w-[500px] p-10 mx-auto'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName" className='font-semibold mt-5'>First Name</label>
                    <Field name="firstName" type='text' id='firstName' placeholder='Enter Your First Name' className='p-4 rounded-sm border border-gray-200'></Field>
                    <div className='text-red-500'><ErrorMessage name='firstName'></ErrorMessage></div>
                    
                    <label htmlFor="lastName" className='font-semibold mt-5'>Last Name</label>
                    <Field name="lastName" type='text'id='lastName' placeholder='Enter Your Last Name' className='p-4 rounded-sm border border-gray-200'></Field>
                    <div className='text-red-500'><ErrorMessage name='lastName'></ErrorMessage></div>



                    <label htmlFor="email" className='font-semibold mt-5'>Your Email</label>
                    <Field name="email" type='text'
                        id='email' placeholder='Your Email' className='p-4 rounded-sm border border-gray-200'></Field>
                                        <div className='text-red-500'><ErrorMessage name='email'></ErrorMessage></div>

                    <label htmlFor="passWord" className='font-semibold mt-5'>Your Password</label>
                    <Field name="password" type='text'
                        id='passWord' placeholder='Your Password' className='p-4 rounded-sm border border-gray-200'></Field>
                    <div className='text-red-500'><ErrorMessage name='password'></ErrorMessage></div>

                    <button type='submit' className='p-4 bg-blue-600 text-white text-10 rounded-lg'>Submit</button>
                </div>
            </Form>
        </Formik>
    );
};

export default Formsignrefactor;