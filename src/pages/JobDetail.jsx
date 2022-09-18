import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import JobDetailProfile from '../components/DashBoard/JobDetailProfile';
import JobQuestion from '../components/Job/JobQuestion';
import { Paragraph, SubTitle , Title} from '../components/Typography';
function JobDetail() {
    const {jobid} = useParams();
    const [qform, setqform] = useState(false);
    const toggle = ()=>{
      setqform(!qform);
    }
  return (
    <div className='w-[100%] mx-auto min-h-screen'>
{
  qform ?       <JobQuestion toggle={toggle} /> :  null
}
     <div className="w-[80%] mx-auto ">
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

        <section className='text-left my-10'>
          <Title>About Us</Title>
          <Paragraph className={"my-5"}>   
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam esse commodi fugiat asperiores in consequuntur distinctio suscipit veniam modi recusandae provident dolorem id, pariatur debitis vel ullam? Eaque velit quis error maxime praesentium consectetur, beatae enim assumenda ipsam voluptatum asperiores corporis tempora cum magnam natus ad quo eum minus est. Repellendus eveniet similique odit animi asperiores quas repudiandae harum recusandae facilis, tenetur blanditiis, repellat ut molestiae maiores dicta beatae vitae delectus cumque pariatur. Adipisci accusamus repellat ipsa rem. Sapiente saepe, amet distinctio rerum minus sequi, dicta ad illum cum debitis deleniti molestiae. Rem sit, quo autem sed quae voluptate.
          </Paragraph>
        </section>


        <section className="skills flex">
             <div className=" mr-2  skill bg-light-blue py-3 rounded-full text-primary px-10">
              UI UX
             </div>
             
             <div className=" mr-2  skill bg-light-blue py-3 rounded-full text-primary px-10">
              UI UX
             </div>

             <div className=" mr-2  skill bg-light-blue py-3 rounded-full text-primary px-10">
              UI UX
             </div>

             <div className=" mr-2  skill bg-light-blue py-3 rounded-full text-primary px-10">
              UI UX
             </div>
        </section>


        <section className="work my-10 text-left">
        <Title >Work Will Include</Title>
        <div className="span my-5"></div>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>

        </section>



        <section className="work my-10 text-left">
        <Title >You Should Have</Title>
        <div className="span my-5"></div>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
        <li className='ml-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>

        </section>

        <section className="work my-10 text-left">
        <Title >Perks</Title>
        <div className="span my-5"></div>
        <li className='ml-3 text-gray-500 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis quaerat esse, quam expedita aliquid veritatis minus quae voluptas suscipit placeat laborum cupiditate sequi sunt aut vel nihil consectetur numquam unde modi quis similique aliquam. Adipisci, quibusdam in repudiandae itaque veniam quas totam porro sunt. Corporis voluptates eius similique odio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>

        <li className='ml-3 text-gray-500 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis quaerat esse, quam expedita aliquid veritatis minus quae voluptas suscipit placeat laborum cupiditate sequi sunt aut vel nihil consectetur numquam unde modi quis similique aliquam. Adipisci, quibusdam in repudiandae itaque veniam quas totam porro sunt. Corporis voluptates eius similique odio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>

        <li className='ml-3 text-gray-500 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis quaerat esse, quam expedita aliquid veritatis minus quae voluptas suscipit placeat laborum cupiditate sequi sunt aut vel nihil consectetur numquam unde modi quis similique aliquam. Adipisci, quibusdam in repudiandae itaque veniam quas totam porro sunt. Corporis voluptates eius similique odio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore!</li>
   
        </section>
        <PrimaryButton onClick = {()=>toggle()}>Apply Now</PrimaryButton>
        <div className="spacer mb-10"></div>
      </div>  
    </div>
  )
}

export default JobDetail