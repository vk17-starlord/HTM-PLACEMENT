import React from 'react'
import { useParams } from 'react-router-dom';
import CoverImg from '../components/CoverImg';
import ProfileImg from '../components/ProfileImg';
function CompanyProfile() {
  const { id } = useParams();
  
  return (
    <div className='w-full min-h-screen'>
        <section className='profile-section'>
      
        </section>
    </div>
  )
}

export default CompanyProfile