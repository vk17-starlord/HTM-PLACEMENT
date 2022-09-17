import React from 'react'
import {useParams} from 'react-router-dom';
import JobDetailProfile from '../components/DashBoard/JobDetailProfile';
function JobDetail() {
    const {jobid} = useParams();
    
  return (
    <div className='w-[70%] mx-auto min-h-screen'>
        <JobDetailProfile/>
        <section className="details w-full flex items-center justify-start">
        <i className='bx bxs-time-five text-gray-400 px-2 ' ></i>
       <span className='text-gray-500 pr-10'> Full Time</span>
       <i class='bx bxs-user text-gray-400 px-2' ></i>
       <span className='text-gray-500 pr-10'> Freasher</span>

       <i class='bx bxs-building text-gray-500 pr-2'></i>
       <span className='text-gray-500 pr-10'> 10,000 + </span>

       <i class='bx bxs-dollar-circle text-gray-500 pr-2'></i>
       <span className='text-gray-500 pr-10'> 10,000 - 20,000 </span>

        </section>
    </div>
  )
}

export default JobDetail