import React from 'react'
import { SubTitle } from '../Typography'
import logo from './icons8-microsoft-96.png'
import {PrimaryButton} from '../Buttons';

function JobDetailProfile() {
  return (
    <div className='w-full py-10 flex justify-between items-center'>
       
        <div className="txt flex justify-start items-start">
        <img src={logo} className="w-16" alt="" />
  <div className="block text-left px-5">
        <h1 className='font-medium text-xl'>UI UX Designer</h1>
         <SubTitle >Microsoft</SubTitle>
  </div>
        </div>
        <PrimaryButton>View Profile</PrimaryButton>
    </div>
  )
}

export default JobDetailProfile