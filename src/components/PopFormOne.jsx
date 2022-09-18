import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import Popup from './Popup';


const SignupSchema = Yup.object().shape({

    Llink: Yup.string()
        .required('Required'),
    Glink: Yup.string()
        .required('Required'),
    Ilink: Yup.string()
        .required('Required'),
    Location: Yup.string()
        .required('Required'),
});
function PopFormOne({ toggle }) {
    return (
        <Popup >
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>

                <Formik

                    initialValues={{
                        Llink: '',
                        Glink: '',
                        Ilink: '',
                        Location: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle()
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="Llink" className='font-Inter relative left-[-170px] text-[16px] font-medium text-black '>Linkdin URL</label>

                            <Field name="Llink" id="Llink" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4 " />
                            {errors.Llink && touched.Llink ? (
                                <div className='text-red-600 mb-2'>{errors.Llink}</div>
                            ) : null}

                            <label htmlFor="Glink" className='font-Inter relative left-[-174px] text-[16px] font-medium text-black'>Github URL</label>
                            <Field name="Glink" id="Glink" type="text" className=" my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                            {errors.Glink && touched.Glink ? (

                                <div className='text-red-600 mb-2'>{errors.Glink}</div>

                            ) : null}

                            <label htmlFor="Ilink" className='font-Inter  relative left-[-166px] text-[16px] font-medium text-black'>Instagram URL</label>
                            <Field name="Ilink" id="Ilink" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.Ilink && touched.Ilink ? <div className='text-red-600 mb-2'>{errors.Ilink}</div> : null}

                            <label htmlFor="Location" className='font-Inter relative left-[-185px] text-[16px] font-medium text-black'>Location</label>
                            <Field name="Location" id="Location" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.Location && touched.Location ? <div className='text-red-600 mb-2'>{errors.Location}</div> : null}

                            <button className='px-10 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>
                        </Form>
                    )}
                </Formik>
            </div >
        </Popup>
    )
}
export default PopFormOne;


