import React from 'react'
import { Paragraph, SubTitle, Title } from '../Typography';
import icon from './icons8-microsoft-96.png';
import {PrimaryButton} from '../Buttons';
function JobCard() {
  return (
    <div className='w-full flex justify-start items-start flex-col bg-white p-5 rounded-lg'>
        <div className="flex mb-2 w-full items-center justify-start">
            <img src={icon} className="w-8 mr-5" alt="profile" />
            <Title>Java Developer</Title>
        </div>
        <SubTitle>Microsoft</SubTitle>
        <Paragraph className="text-left my-2">Lorem, ipsum dolor sit amet andrew si istma consectetur adipisicing elit. Ipsam, suscipit?</Paragraph>
        <p className='w-full text-left text-black font-medium'>Salary ~ 10,000 - 15,000</p>
         <PrimaryButton className={"mt-3 w-full"}>View Job</PrimaryButton>
    </div>
  )
}

export default JobCard