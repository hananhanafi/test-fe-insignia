import React from 'react';
import Menu from '../Menu/Menu';
import { BiLogoTwitter }from 'react-icons/bi'
import { BiLogoLinkedin }from 'react-icons/bi'
import { BiLogoFacebook }from 'react-icons/bi'

const Footer = (props) => {
    return (
      <div className='p-4 px-4 sm:px-10 bg-main mt-8 text-center sm:text-left'>
        <hr className='text-main-light w-full'/>
        <div className='flex mt-4 sm:mb-4 w-full'>
          <button className='bg-main-light p-1 rounded mr-2 max-[600px]:ml-auto'>
            <BiLogoTwitter className='text-main'/>
          </button>
          <button className='bg-main-light p-1 rounded mr-2'>
            <BiLogoLinkedin className='text-main'/>
          </button>
          <button className='bg-main-light p-1 rounded mr-2 max-[600px]:mr-auto'>
            <BiLogoFacebook className='text-main'/>
          </button>
        </div>
        <Menu data={['About','For Business','Suggestions','Help & FAQs','Contact Us','Pricing']} fontSize={'12px'}/>
        <div className='mt-2 sm:mt-4 text-center sm:text-left'>
          <p className='text-xs text-main-light'>© Copyright 2013 companyname inc.</p>
          <Menu data={['Privacy','Terms']} fontSize={'12px'}/>
        </div>
      </div>
    );
};

export default Footer;
