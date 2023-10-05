import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { HiUpload } from "react-icons/hi";
import MobileMenu from '../Menu/MobileMenu';
import ModalProfile from '../profile/ModalProfile';

const Header = (props) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowModalProfile, setIsShowModalProfile] = useState(false)
    
    const showMobileMenu = function () {
      setIsShowMobileMenu(true)
    }
    const closeMobileMenu = function () {
      setIsShowMobileMenu(false)
    }
    const showModalProfile = function () {
      setIsShowModalProfile(true)
    }
    const closeModalProfile = function () {
      setIsShowModalProfile(false)
    }
    return (
      <div className="fixed bg-main top-0 z-10 w-full p-4 px-4 sm:px-10">
        <div className='items-center hidden sm:flex items-center'>
          <div className="text-3xl text-main-light mr-4">
            <span className='font-medium'>Social</span><span className='font-light'>Network</span>
          </div>
          <div className="bg-main-light w-full mx-4 relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full h-10 bg-main-light rounded-md border-0 py-1.5 px-1 text-gray-900 ring-1 placeholder:text-main sm:text-sm sm:leading-6"
              placeholder="Find..."
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-main sm:text-sm">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className='mx-4 mt-2'>
            <button
              type="button"
              className="relative rounded bg-main-light p-1 px-4 text-main w-full h-10 flex items-center justify-center hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
            >
              <FaArrowUp className='mr-2'/>
              Upload
            </button>
          </div>
          <div className='mx-4 mt-2 flex justify-end'>
            <button
              type="button"
              className="relative rounded bg-main-light p-1 px-4 mr-2 text-main flex items-center justify-center hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
            >
              <FaUser className='text-sm'/>
            </button>
            <div className='text-sm text-main-light font-semibold relative'>
              <div className='mr-4'>
                Waseem
              </div>
              <div className='mr-4'>
                Arshad
              </div>
              <div className='absolute top-0 right-0 rounded-full bg-main-light text-main text-xs font-semibold h-4 w-4 text-center'>
                15
              </div>
            </div>
          </div>
        </div>
        <div className='items-center flex justify-between sm:hidden items-center text-lg'>
          <div className=" text-main-light">
            <button
              type="button"
              className="relative rounded p-2 text-main-light flex items-center justify-center hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
              onClick={()=>{showMobileMenu()}}
            >
              <FaBars/>
            </button>
          </div>
          <div className=" text-main-light">
            <span className='font-medium'>Social</span><span className='font-light'>Network</span>
          </div>
          <div className="flex text-main-light">
            <button
              type="button"
              className="relative rounded p-2 text-main-light flex items-center justify-center hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
            >
              <HiUpload/>
            </button>
            <button
              type="button"
              className="relative rounded p-2 text-main-light flex items-center justify-center hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
              onClick={()=>{showModalProfile()}}
            >
              <FaUser/>
            </button>
          </div>
        </div>
        <MobileMenu show={isShowMobileMenu} onClose={closeMobileMenu}/>
        <ModalProfile show={isShowModalProfile} onClose={closeModalProfile}/>
      </div>
    );
};

export default Header;
