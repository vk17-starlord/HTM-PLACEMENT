import React, { useState } from 'react';
import CoverImg from '../components/CoverImg';
import ProfileImg from "../components/ProfileImg"
// import { SubTitle } from '../components/Typography'
import EditText from '../components/EditText';
function ProfilePage() {

    return (
        <>
            <div className='w-full'>
                <CoverImg />
            </div>
            <div className=' grid grid-cols-2'>
                <div className="">
                    <ProfileImg />
                </div>
                <div className='flex flex-row justify-center mt-3 '>
                    <a href="#" className='mx-4'><img alt='icon' src="https://img.icons8.com/color/30/000000/instagram-new--v1 png" /></a>
                    <a href="#" className=''><img alt='icon' src="https://img.icons8.com/color/30/000000/twitter--v1.png" /></a>
                    <a href="#" className='mx-4'><img alt='icon' src="https://img.icons8.com/fluency/30/000000/github.png" /></a>
                    <a href="#" className=''><img alt='icon' src="https://img.icons8.com/ultraviolet/30/000000/domain.png" /></a>
                </div>
            </div>
            <div className=" flex justify-between lg:px-72 px-[30px] ">
                {/* <EditText /> */}
                {/* <SubTitle className="">John Doe</SubTitle> */}
                <EditText />
                <span className='cursor-pointer'>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                </span>

            </div>

            {/* <div className='grid grid-row-3'>
                <div className='inline-flex place-content-center text-p-gray'> <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    Location
                </div>
                <div>
                    <div className='flex place-content-center text-p-gray'>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        D-O-B
                    </div>
                </div>
                <div>
                    <div className='flex place-content-center text-p-gray'>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                        RitvikJain22@vit.edu.in
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default ProfilePage;