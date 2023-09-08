import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";

import Style from "./Header.module.css"
function Header() {
  return <>
  <div className={Style.forme}>
  </div>

  <div className='flex justify-center gap-20  p-4 flex-wrap   '>

  <div className='mt-48  w-screen    sm:w-2/5  ' >
  
  <h1 className='text-4xl sm:text-start text-center  sm:text-6xl  text-gray-800 font-bold '  >One app to <br />replace them all.</h1>
<h1 className='font-medium text-gray-700 mt-8  hidden sm:block'>
All your work in one place:</h1>

<div className='hidden sm:block'>


<div className='flex   flex-wrap gap-3 mt-4  '>
    
    <div className='flex basis-1/7 items-center gap-1  font-semibold text-sm  px-2 bg-white cursor-pointer w-24 rounded-lg h-12  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Tasks </h1>
<FcApproval className='text-xl' />
    </div> 
    <div className='flex basis-1/5 items-center gap-1 font-medium text-sm bg-white cursor-pointer w-36 rounded-lg h-12  px-6  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Whiteboard </h1>
<FcProcess className='text-xl' />
    </div>

    <div className='flex basis-1/5 items-center gap-1 font-medium text-sm bg-white cursor-pointer w-36 rounded-lg h-12  px-6  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Dashboard </h1>
<FcWorkflow className='text-xl' />
    </div>
    <div className='flex  basis-1/7 items-center gap-1 font-semibold text-sm bg-white  px-6 cursor-pointer w-24 rounded-lg h-12  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Chat </h1>
<FcApproval className='text-xl' />
    </div> 

    <div className='flex basis-1/7  items-center gap-1 font-semibold text-sm bg-white cursor-pointer w-24 rounded-lg h-12  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Goals </h1>
<FcApproval className='text-xl' />
    </div> 
    <div className='flex basis-1/7  items-center gap-1 font-semibold text-sm bg-white cursor-pointer w-24 rounded-lg h-12  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] text-center justify-center'>
<h1>Docs </h1>
<FcApproval className='text-xl' />
    </div> 
</div>
</div>

<div className='block sm:hidden'>

<div className='flex justify-center sm:justify-start   flex-co mt-10  flex-wrap '>

 <div className='flex  items-center gap-2   mt-4'>
  <BsCheckCircle className='  w-4 h-4  text-green-600 '/>
  <h1 className='font-medium  text-gray-800'>Manage tasks, workflows, & goals</h1>
 </div>

 <div className='flex items-center gap-2  ml-3  mt-4'>
  <BsCheckCircle className='  w-4 h-4  text-green-600 '/>
  <h1  className='font-medium  text-gray-800'>Collaborate in Docs & Whiteboards</h1>
 </div>

 <div className='flex items-center gap-2 ml-6  mt-4'>
  <BsCheckCircle className='  w-4 h-4  text-green-600 '/>
  <h1  className='font-medium  text-gray-800'>Save time with no-code automations</h1>
 </div>
</div>
</div>

<div className='flex justify-center sm:justify-start'>

<input className='  sm:w-96  w-80  h-14 border border-gray-400 mt-8   rounded-xl   '   placeholder="   Enter your work email" type="text" />
</div>
<div className='mt-4 flex  font-bold text-sm items-center gap-2   justify-center sm:justify-start' >
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] z-auto font-bold rounded-lg text-sm  w-80 sm:w-44 px-10  py-5 mt-4 dark:bg-violet-600 shadow-gray-600 dark:hover:bg-violet-600    hover:shadow-md focus:outline-none dark:focus:ring-blue-800">Get Started</button>
<h1 className='text-gray-400 mb-2 ml-2 mt-4 hidden sm:block'>
FREE FOREVER. <br />

NO CREDIT CARD.
</h1>
</div>
<img className='block sm:hidden mt-16 ' src="imgsssx.png" alt="imgsss.png" />


<div className='flex items-center flex-wrap mt-14  justify-center sm:justify-start'>
    <img className='w-4    h-4' src={"./star.png"}alt="" />
    <img className='w-4    h-4' src={"./star.png"}alt="" />
    <img className='w-4    h-4' src={"./star.png"}alt="" />
    <img className='w-4    h-4' src={"./star.png"}alt="" />
    <img className='w-4    h-4' src={"./star.png"}alt="" />
    <h1 className='text-gray-500  ml-2 text-sm'>
    Based on 10,000+ reviews on
</h1>
</div>


<div className='flex  gap-8 mt-4  justify-center sm:justify-start'>
<img className='w-auto h-5 cursor-pointer ' src={  "./g2crowd.png"}alt="" />
<img className='w-auto h-5 cursor-pointer ' src={  "./capterra.png"}alt="" />
<img className='w-auto h-5 cursor-pointer ' src={  "./git.png"}alt="" />


</div>
  </div>
  <div>
  <video className="mt-32" width="600" height="500" rounded  loop  autoPlay  muted controls src="ClickUp™ - One app to replace them all.webm" />

  </div>
  
  </div>

  
  </>
}

export default Header
