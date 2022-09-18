import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';

const CertificateSchema = Yup.object().shape({
    CourseName: Yup.string()
        .required("Required"),
    Org: Yup.string()
        .required("Required"),
    DescCourse: Yup.string()
        .required("Required")

});
function Certifications({ toggle }) {
    return (
        <Popup>
            <div className={` flex flex-col w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg`}>
                <Formik
                    initialValues={{
                        CourseName: "",
                        Org: "",
                        DescCourse: "",
                    }}
                    validationSchema={CertificateSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="CourseName" className='font-Inter relative left-[-163px] text-[16px] font-medium text-black'>Course Name</label>
                            <Field name="CourseName" placeholder="Course Name" id="CourseName" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.CourseName && touched.CourseName ? (
                                <div className='text-red-600 mb-2'>{errors.CourseName}</div>
                            ) : null}

                            <label htmlFor="Org" className='font-Inter relative left-[-168px] text-[16px] font-medium text-black'>Organisation</label>
                            <Field name="Org" placeholder="Organisation Name" id="Org" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " />
                            {errors.Org && touched.Org ? (
                                <div className='text-red-600 mb-2'>{errors.Org}</div>
                            ) : null}

                            <label htmlFor="DescCourse" className='font-Inter relative left-[-134px] text-[16px] font-medium text-black'>Description of course </label>
                            <Field name="DescCourse" id="DescCourse" as="textarea" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 " placeholder="Description" />
                            {errors.DescCourse && touched.DescCourse ? (
                                <div className='text-red-600 mb-2'>{errors.DescCourse}</div>
                            ) : null}

                            <div className='flex flex-row justify-around'>
                                <label htmlFor="Certificate" className='font-Inter relative  text-[16px] font-medium text-black'>Upload Completion Certificate</label>
                                <PrimaryButton>
                                    <input type="file" name="Image" id="Certificate" className='hidden' />
                                    Upload Image
                                </PrimaryButton>
                            </div>
                            <button className='px-10 py-2 mt-4 relative left-[-155px] bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Popup>
    )
}

export default Certifications;