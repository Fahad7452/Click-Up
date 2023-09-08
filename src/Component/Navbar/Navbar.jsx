import React from 'react'
import { useState } from 'react'
import Style from "./Navbar.module.css"
function Navbar() {

  
  return <>








    <nav id={Style.Love} class="fixed bg-whit  bg-transparent w-screen  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)]">
      <div class="flex flex-wrap  items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
          <img src={"./logo3.png"} class="h-16 " alt="Flowbite Logo" />
        </a>

        <div class="flex md:order-2 mt-3 ml-2 sm:ml-12 items-center">
       
        <button type="button" class="text-purple-600  hidden sm:block focus:ring-4s shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] focus:ring-blue-300 font-bold rounded-lg text-sm px-8 py-3 mr-2 mb-2 dark:bg-white shadow-gray-600    hover:shadow-md focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
        <button type="button" class="text-white  bg-purple-600  focus:ring-4s  focus:ring-blue-300 font-bold rounded-lg text-sm  px-4 sm:px-8  py-3 mr-2 mb-2 dark:bbg-violet-400   ">Login </button>

      <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2  w-10 h-10 justify-center text-sm  rounded-lg md:hidden  " aria-controls="mega-menu-full" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
  </div>

       
        <div id="mega-menu-full" class="items-center justify-between text-gray-400 font-medium hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col p-4 md:p-0 mt-4 border font-sans  font-semibold text-base
           border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ml-4   ">
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex   items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Product <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
           
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="secounddrowpdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Solution <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>

            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="thirddrowpdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Learn <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Enterprice</a>
            </li> <li>
              <a href="#" class="block py-2 pl-3 pr-4 ml-0 sm:ml-44 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Contact Sales</a>
            </li>
          </ul>
          
        </div>


        
      </div>

      <div id="mega-menu-full-dropdown" class="mt-1 hidden border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Fahad Stores</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="secounddrowpdown" class="mt-1 hidden border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online </div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="thirddrowpdown" class="mt-1 hidden border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>




  </>
}

export default Navbar
