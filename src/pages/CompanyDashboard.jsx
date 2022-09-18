import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BaseUrl} from '../api/apiURL';
function CompanyDashboard() {
   const [Loading, setLoading] = useState(true);
   const [Data, setData] = useState(null);
   
   useEffect(()=>{
   const fetchJobs= ()=>{
    const token = sessionStorage.getItem('bearer');
    
    const config = {
        headers: { 'x-access-token': `Bearer ${token}` }
    };
    axios.get(`${BaseUrl}/company/jobposted`,config).then((res)=>{
     console.log(res.data.data)
     setData(res.data.data);
     setLoading(false)
    }).catch((err)=>console.log(err))
}
   fetchJobs();
   },[])    
    return (
    <div className='pt-10'>

  
       
    </div>
  )
}

export default CompanyDashboard