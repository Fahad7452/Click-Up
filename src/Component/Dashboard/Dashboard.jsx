import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsAppIndicator } from "react-icons/bs";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import { BsFill4CircleFill } from "react-icons/bs";
import { BsFill5CircleFill } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";



function Dashboard() {



  return <>


    <h1 className='text-gray-500 font-semibold text-sm mb-2 text-center mt-20'>
      JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
    </h1>


    <div className='flex  sm:bg-transparent bg-gray-500  p-4 rounded-xl justify-center gap-16 mt-10 flex-wrap'>
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/booking_com.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/ibm.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/logitech.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/fortinet.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/tibco.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/spotify_logo_with_text.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/t-mobile_logo.svg"} alt="" />
      <img className='w-auto h-6 cursor-pointer ' src={"https://clickup.com/assets/logos/netflix.svg"} alt="" />


    </div>





    <div className='flex justify-center  p-10 w-screen  sm:w-11/12  sm:gap-20  gap- bg-pink-50 rounded-[50px]  flex-wrap m-auto  mt-20  '>

      <div className='mt-10   w-screen    sm:w-1/3   ' >

        <div className='flex  sm:gap-18 gap-5 text-lg   font-semibold flex-wrap'>
          <h1>Project&Tasks</h1>
          <h1>Chat</h1>
          <h1>Goals</h1>
          <h1>Views</h1>
        </div>

        <h1 className='text-4xl   text- font-bold   mt-6'  >Simplify work and <br /> get more done.</h1>
        <h1 className='font text-slate-800 mt-8 font-normal'>


          Plan, track, and manage any type of work with project <br /> management that flexes to your team's needs</h1>
        <div className='flex gap-16  font-semibold flex-wrap  mt-4'>
          REPLACES: Asana | Monday | Jira
        </div>

        <div className='mt-8 flex font-bold text-sm items-center gap-2' >
          <button type="button" class="text-white   shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] z-auto font-bold rounded-lg text-sm  w-80 sm:w-44 px-10  py-5 mt-4 dark:bg-pink-400 ">Get Started</button>

        </div>


      </div>
      <div>
        <video className="mt-32 rounded-2xl " rounded-3xl width="600" rounded height="500" loop autoPlay muted controls src="ClickUp™ - One app to replace them all123.mp4" />

      </div>

    </div>




    <div className=' justify-center    w-screen  sm:w-11/12  sm:gap-20  text-center bg-slate-100 rounded-[50px]   m-auto  mt-14 '>

      <div className='text-lg  font-semibold sm:gap-16  flex justify-center gap-6 mt-10 pt-2'>


        <h1 className='mt-4'>
          Docs
        </h1>

        <h1 className='mt-4'>
          Whiteboards
        </h1>

        <h1 className='mt-4'>
          Dashboards
        </h1>
      </div>


      <h1 className='mt-8 text-3xl text-gray-800  sm:text-5xl font-bold '>
        The world's most <br /> powerful (and fun) Docs.
      </h1>

      <div className='mt-10'>
        <video className=" m-auto bg-transparent  rounded-[30px] p-4" rounded-3xl width="800" rounded height="700" loop autoPlay muted controls src="ClickUp™ - One app to replace them all_2.mp4" />

      </div>


      <h1 className=' flex items-center h-24  pt-2 justify-center font-semibold gap-2 mt-4  rounded-ee-3xl  rounded-bl-3xl bg-slate-300 '>
        Get Started
        <HiArrowNarrowRight className='text-violet-900 h-10' />
      </h1>

    </div>


    <div className='flex justify-center p-10  gap-0 sm:gap-20 w-screen  sm:w-11/12     bg-green-50 rounded-t-3xl  flex-wrap m-auto  mt-20  '>

      <div className='  w-screen      sm:w-1/3   ' >

        <div className='text-white  bg-emerald-500 w-16 h-16 items-center flex rounded-xl justify-center'>

          <BsAppIndicator className='text-white  w-10 h-10  ' />
        </div>

        <div className='font-semibold text-sm text-emerald-500 mt-16'>THE PLATFORM</div>

        <h1 className='sm:text-5xl  text-4xl    font-bold  text-gray-800   mt-6'  >Import to the <br /> future of work <br />with one click.</h1>
        <h1 className='font text-slate-800 mt-8 font-normal'>


          Instantly import your work from other tools automatically. <br /> Create a custom import to bring work in from excel or tools <br /> that aren't supported.</h1>

        <div className='flex flex-wrap gap-6  mt-4'>


          <div className='flex items-center gap-2'>

            <BsFill1CircleFill className='text-green-600  w-6 h-6   rounded-full' />
            <h1 className='font-semibold text-sm'>IMPORT </h1>
          </div>

          <div className='flex items-center gap-2 '>

            <BsFill2CircleFill className='text-white   w-6 h-6 bg-gray-900  rounded-3xl border-none' />
            <h1 className='font-semibold text-sm text-gray-600'>DOWNLOAD </h1>
          </div>

          <div className='flex items-center gap-2'>

            <BsFill3CircleFill className='text-white  w-6 h-6 bg-black  rounded-full' />
            <h1 className='font-semibold text-sm text-gray-600'>CLICKAPPS

            </h1>
          </div>

          <div className='flex items-center gap-2'>

            <BsFill4CircleFill className='text-white   w-6 h-6  bg-black rounded-full' />
            <h1 className='font-semibold text-sm text-gray-600'>INTEGRATIONS </h1>
          </div>

          <div className='flex items-center gap-2'>

            <BsFill5CircleFill className='text-white   w-6 h-6 bg-black  rounded-full' />
            <h1 className='font-semibold text-sm text-gray-600'>AUTOMATIONS </h1>
          </div>

        </div>


      </div>



      <div>
        <video className=" rounded-2xl mt-24 " rounded-3xl width="600" rounded height="500" loop autoPlay muted controls src="ClickUp™ - One app to replace them all_3.mp4" />

      </div>

    </div>

    <h1 className=' flex justify-center p-2 font-semibold  w-screen  sm:w-11/12  rounded-b-3xl   bg-green-100  items-center  flex-wrap m-auto'>
      Get Started
      <HiArrowNarrowRight className='text-green-600 h-10 ' />
    </h1>




    <div className=' p-10  gap-0 sm:gap-20 w-screen  sm:w-11/12     bg-green-50 rounded-3xl   m-auto  mt-20  '>

      <h1 className='text-center font-bold text-xs text-cyan-400'>
        BUILT FOR EVERYONE
      </h1>

      <h1 className='text-center font-bold text-gray-800 text-5xl mt-5'>
        Built for teams from 1 to 1,000+.
      </h1>

      <div className='flex justify-center flex-wrap gap-4 cursor-pointer  sm:gap-16 mt-16'>

        <h1 className=' font-semibold text-base'>
          Project Management
        </h1>
        <h1 className=' font-semibold text-base'>
          Engineering
        </h1>
        <h1 className=' font-semibold text-base'>
          Sales
        </h1><h1 className=' font-semibold text-base'>
          Marketing
        </h1><h1 className=' font-semibold text-base'>
          Product
        </h1><h1 className=' font-semibold text-base'>
          Design
        </h1><h1 className=' font-semibold text-base'>
          Finance
        </h1>
        <h1  className=' font-semibold text-base'>
          HR
        </h1>
        <h1  className=' font-semibold text-base'>
          IT
        </h1>









      </div>
      <div className='flex  flex-wrap gap-10  justify-center sm:justify-center  mt-16'>


        <div className='  w-screen      sm:w-1/3 p-1   ' >

          <div className='flex flex-wrap gap-2 sm:gap-6 mt-6'>
            <img className='sm:w-14 w-10  h-10  sm:h-14 rounded-2xl' src="Screenshot 2023-09-07 160026.png" alt="Screenshot 2023-09-07 160026.png" />
            <div>

              <h1 className=' text-sm sm:text-base font-semibold'>
                Visualize & Plan
              </h1>
              <p className='text-xs sm:text-sm'>
                Manage any project from start to finish with highly <br /> customizable views that make project planning a <br /> breeze.
              </p>
            </div>
          </div>


          <div className='flex flex-wrap  gap-2 sm:gap-6   mt-9'>
            <img className='sm:w-14 w-10  h-10  sm:h-14 rounded-2xl' src="sc.png" alt="Screenshot 2023-09-07 160026.png" />
            <div>

              <h1 className='text-base font-semibold'>
                Collaborate  </h1>
              <p className='text-xs sm:text-sm'>
                Work with your team in real-time with Chat, assign <br /> comments for action items, and never miss a beat <br /> with notifications that bring everything in <br />one place.  </p>
            </div>
          </div>


          <div className='flex flex-wrap  gap-2 sm:gap-6   mt-9'>
            <img className='sm:w-14 w-10  h-10  sm:h-14 rounded-2xl' src="sf.png" alt="Screenshot 2023-09-07 160026.png" />
            <div>

              <h1 className='text-base font-semibold'>
                Track Progress  </h1>
              <p className='text-xs sm:text-sm'>
                Add visual widgets for team members, tasks, <br /> sprints, time tracking, statuses, docs, embeds, <br /> and more.  </p>
            </div>
          </div>

          <button type="button" class="text-white mt-9  z-auto font-bold rounded-lg text-sm  w-80 sm:w-44 px-10  py-5 dark:bg-sky-500 shadow-gray-600    hover:shadow-md focus:outline-none dark:focus:ring-blue-800">Get Started</button>





        </div>


        <img className='   sm:w-2/4' src={"./fd.png"} alt="" />

      </div>

    </div>

    <div className='flex  w-screen items-center gap-20 justify-center p-6  sm:w-11/12 sm:gap-20  gap- bg-pink-50 rounded-[50px]  flex-wrap m-auto  mt-20  '>

<div className='flex justify-center items-center cursor-pointer'>
  <img  className='w-80  h-80' src="23.png" alt="23.png" />
  <img className='w-20 h-20 absolute ml-0 sm:ml-80       ' src="123.png" alt="defads.png" />
</div>

<div>
  <h2 className=' font-normal text-2xl '>ClickUp has become such an integral part of our work! By <br /> putting our work on ClickUp and organizing it into Sprints, <br /> we made it easy to work across departments without <br /> overloading ourselves with meetings and email threads.</h2>
 <h2  className='text-lg font-bold  mt-4 '>
 Jakub, Inbound Marketing Team Lead, STX Next
 </h2>
 <div className='flex justify-between'> 
 <img className='w-20 h-20   ' src="https://images.ctfassets.net/w8fc6tgspyjz/2Ozb8IxI78NbgTthVjXFI5/a4d0e4d583ac7b92e6e4dc4b08689cb0/stxnext.svg" alt="defads.png" />
<div className='flex items-center gap-5'>
  <BsArrowLeftCircle className='w-10 h-10 text-gray-400'/>
  <BsArrowRightCircle className='w-10 h-10 text-gray-700'/>
</div>
 </div>
</div>

</div>

    <div className='flex justify-center w-screen p-4   sm:w-11/12 gap-10  m-auto    mt-20  flex-wrap   '>

<div className='  w-screen      sm:w-1/3   ' >

  <div className='text-white  bg-violet-700 w-16 h-16 items-center flex rounded-xl justify-center'>

    <Ri24HoursFill className='text-white  w-10 h-10  ' />
  </div>

  <div className='font-semibold text-sm  mt-12 text-violet-700 '>#1 SUPPORT IN SOFTWARE</div>

  <h1 className='text-5xl    font-bold  text-gray-800   mt-6'  >24/7 real-time <br /> support..</h1>
  <h1 className='font text-slate-800 mt-12 font-normal'>


  ClickUp has the highest rated client support in software. <br /> We're here 24 hours a day, every day of the week, including <br />holidays.    
    </h1>
<div className='flex mt-12  flex-wrap gap-6'>

 <div className='flex items-center gap-2'>
  <BsCheckCircle className='  w-6 h-6  text-violet-700 '/>
  <h1 className='font-medium  text-gray-800'>Email Support</h1>
 </div>

 <div className='flex items-center gap-2 ml-0 sm:ml-12'>
  <BsCheckCircle className='  w-6 h-6  text-violet-700 '/>
  <h1  className='font-medium  text-gray-800'>Live Chat for Unlimited <br /> Plan+ Workspaces</h1>
 </div>

 <div className='flex items-center gap-2'>
  <BsCheckCircle className='  w-6 h-6  text-violet-700 '/>
  <h1  className='font-medium  text-gray-800'>Frequent Webinars</h1>
 </div>
</div>
  
</div>


<div>
<img className='w-10/12' src="sa.png" alt="Screenshot 2023-09-06 123827.png" />
</div>

</div>












  </>
}

export default Dashboard
