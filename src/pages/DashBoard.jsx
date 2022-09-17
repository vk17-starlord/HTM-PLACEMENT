import React, { useEffect } from 'react'
import CreateJobAlert from '../components/DashBoard/CreateJobAlert'
import JobCard from '../components/DashBoard/JobCard';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput'
import { Title} from '../components/Typography';
import {useAuth } from '../hooks/Auth';
const SelectInput = ()=>{
 return <select id="countries" class="bg-gra text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  <option value="new">Newest </option>
  <option value="old">Oldest </option>
  <option value="relevance">Relevance</option>
</select>
}
function DashBoard() {
  const {GetUser} = useAuth();
  useEffect(()=>{
    GetUser()
},[])
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <div className='w-full bg-[#F8F7FF] min-h-screen pt-10'>
        <Header/>
        <div className="container py-10  mx-auto">
        <SearchInput/>
        <div className=" my-10 w-full grid-cols-[3fr,9fr] grid">
        <div className="sidebar ">
        <CreateJobAlert/>
        <div className="text-left my-5">
        <h1 className='font-bold font-Inter'>Type Of Employment</h1>
        
<ul class="w-full my-2  text-sm text-gray-500  rounded-lg  dark:text-white">
    <li class="w-full rounded-t-lg  ">
        <div class="flex items-center ">
            <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
            <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Full Time</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg  ">
        <div class="flex items-center ">
            <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
            <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Part Time</label>
        </div>
    </li>
</ul>



<h1 className='font-bold font-Inter'>Required Experience</h1>
        
        <ul class="w-full my-2  text-sm text-gray-500  rounded-lg  dark:text-white">
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Entry Level</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Internship Experience</label>
                </div>
            </li>
        </ul>


        <h1 className='font-bold font-Inter'>Salary Range</h1>
        
        <ul class="w-full my-2  text-sm text-gray-500  rounded-lg  dark:text-white">
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">1000-10,000</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">10,000-25,000</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">25,000-50,000</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">50,000-100,000</label>
                </div>
            </li>

        </ul>


        <h1 className='font-bold font-Inter'>Companies</h1>
        
        <ul class="w-full my-2  text-sm text-gray-500  rounded-lg  dark:text-white">
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Google</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Microsoft</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">TCS</label>
                </div>
            </li>
            <li class="w-full rounded-t-lg  ">
                <div class="flex items-center ">
                    <input id="chkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 "/>
                    <label htmlFor="chkbox" class="py-1 ml-2 w-full text-sm text-gray-500 ">Amazon</label>
                </div>
            </li>
        </ul>


        </div>
        </div>
        <div className="main-layout px-10">
          
          <div className="flex  items-center justify-between">
            <Title> Showing 50 Results</Title>
            <div className="sort w-64 flex justify-between">
              <SelectInput />
            </div>
          </div>

          <div className="grid gap-4 my-10 grid-cols-3">
            {
              arr.map((ele)=>{
                return <JobCard key={ele}></JobCard>
              })
            }
          </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default DashBoard