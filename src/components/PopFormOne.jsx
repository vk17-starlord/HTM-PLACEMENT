import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import Popup from './Popup';
import { PrimaryButton } from './Buttons';


const SignupSchema = Yup.object().shape({

    LinkedinLink: Yup.string()
        .required('Required').url(),
    GithubLink: Yup.string()
        .required('Required').url(),
    InstaLink: Yup.string()
        .required('Required').url(),
    Location: Yup.string()
        .required('Required'),
    About: Yup.string()
        .required('Required'),
    About: Yup.string()
        .required('Required'),
    SkillSet: Yup.string()
        .required("Required"),
    YourRole: Yup.string()
        .required("Required"),
    ProfileImage: Yup.string().url()
        .required("Required"),
    CoverImage: Yup.string().url()
        .required("Required")
});
function PopFormOne({ toggle }) {

    return (
        <Popup >

            <div className={` flex flex-col h-screen w-[500px] justify-center mx-auto relative bg-white p-8 rounded-lg `}>

                <Formik

                    initialValues={{
                        LinkedinLink: '',
                        GithubLink: '',
                        InstaLink: '',
                        Location: "",
                        About: "",
                        SkillSet: "",
                        YourRole: "",
                        ProfileImage: "",
                        CoverImage: ""

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values));
                        toggle()
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="SkillSet" className='font-Inter relative left-[-190px] text-[16px] font-medium text-black '>SkillSet</label>

                            <Field name="SkillSet" id="SkillSet" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4 " placeholder="Enter comma separated values" />
                            {errors.SkillSet && touched.SkillSet ? (
                                <div className='text-red-600 mb-2'>{errors.SkillSet}</div>
                            ) : null}

                            <label htmlFor="YourRole" className='font-Inter relative left-[-190px] text-[16px] font-medium text-black '>YourRole</label>

                            <Field name="YourRole" id="YourRole" tye="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4 " placeholder="ex.UI UX Designer,Full Stack Developer" />
                            {errors.YourRole && touched.YourRole ? (
                                <div className='text-red-600 mb-2'>{errors.YourRole}</div>
                            ) : null}


                            <label htmlFor="About" className='font-Inter relative left-[-190px] text-[16px] font-medium text-black '>About</label>

                            <Field name="About" id="About" as="textarea" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4 " />
                            {errors.About && touched.About ? (
                                <div className='text-red-600 mb-2'>{errors.About}</div>
                            ) : null}


                            <label htmlFor="LinkedinLink" className='font-Inter relative left-[-170px] text-[16px] font-medium text-black '>Linkdin URL</label>

                            <Field name="LinkedinLink" id="LinkedinLink" type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4 " />
                            {errors.LinkedinLink && touched.LinkedinLink ? (
                                <div className='text-red-600 mb-2'>{errors.LinkedinLink}</div>
                            ) : null}

                            <label htmlFor="GithubLink" className='font-Inter relative left-[-174px] text-[16px] font-medium text-black'>Github URL</label>
                            <Field name="GithubLink" id="GithubLink" type="text" className=" my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                            {errors.GithubLink && touched.GithubLink ? (

                                <div className='text-red-600 mb-2'>{errors.GithubLink}</div>

                            ) : null}

                            <label htmlFor="InstaLink" className='font-Inter  relative left-[-166px] text-[16px] font-medium text-black'>Instagram URL</label>
                            <Field name="InstaLink" id="InstaLink" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.InstaLink && touched.InstaLink ? <div className='text-red-600 mb-2'>{errors.InstaLink}</div> : null}

                            <label htmlFor="Location" className='font-Inter relative left-[-185px] text-[16px] font-medium text-black'>Location</label>
                            <Field name="Location" id="Location" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.Location && touched.Location ? <div className='text-red-600 mb-2'>{errors.Location}</div> : null}


                            <label htmlFor="CoverImage" className='font-Inter  relative left-[-166px] text-[16px] font-medium text-black'>Cover Image URL</label>
                            <Field name="CoverImage" id="CoverImage" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.CoverImage && touched.CoverImage ? <div className='text-red-600 mb-2'>{errors.CoverImage}</div> : null}

                            <label htmlFor="ProfileImage" className='font-Inter  relative left-[-166px] text-[16px] font-medium text-black'>Profile Image URL</label>
                            <Field name="ProfileImage" id="ProfileImage" type="text" className="my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />

                            {errors.ProfileImage && touched.ProfileImage ? <div className='text-red-600 mb-2'>{errors.ProfileImage}</div> : null}

                            {/* <div className='flex flex-row justify-around items-center mb-4'>
                                <label htmlFor="CoverImage" className='font-Inter relative left-[-20px] text-[16px] font-medium text-black'>Cover Photo</label>
                                <input type="file" name="CoverImage" id="CoverImage" className='hidden'
                                    onChange={handleImageChange}
                                />
                                <button className='px-4 py-1  bg-primary text-white rounded-md hover:bg-primary-dark'>
                                    Upload Image
                                </button>
                            </div> */}

                            {/* <div className='flex flex-row justify-around items-center mb-4'>
                                <label htmlFor="ProfileImage" className='font-Inter relative left-[-20px] text-[16px] font-medium text-black'>Profile Photo</label>
                                <input type="file" name="ProfileImage" id="ProfileImage" className='hidden'
                                    onChange={handleImageChange}
                                />
                                <button className='px-4 py-1  bg-primary text-white rounded-md hover:bg-primary-dark'>
                                    Upload Image
                                </button>
                            </div> */}

                            <button className='px-10 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary-dark' type='submit' >Save</button>

                            <PrimaryButton className="ml-4" onClick={() => {
                                toggle()
                            }}>Cancel</PrimaryButton>
                        </Form>
                    )}
                </Formik>
            </div >
        </Popup>
    )
}
export default PopFormOne;


