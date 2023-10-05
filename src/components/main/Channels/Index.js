import React from 'react';
import ChannelCard from './ChannelCard';
import { FaArrowRight } from "react-icons/fa";

const Channels = (props) => {
    const channels = [
      {
        name: 'Google',
      },
      {
        name: 'Dribbble',
      },
      {
        name: 'Microsoft',
      },
      {
        name: 'Behance',
      },
      {
        name: 'Wheater Channel',
      },
      {
        name: 'Gurus',
      },
      {
        name: 'iMedia',
      },
      {
        name: 'Creativeye',
      },
      {
        name: 'Khan Studio',
      },
      {
        name: 'Yahoo',
      },
    ]
    return (
        <>
        <div className='w-full sm:mt-10'>
            <div className='grid grid-cols-2 gap4 flex items-end'>
              <div className='text-main-light text-xl font-medium sm:text-2xl'>
                Channel
              </div>
              <button className='hidden sm:inline text-main-light text-right'>
                Browse all channels
              </button>
              <button className='sm:hidden text-main-light text-right flex items-center justify-end'>
                Browse all channels <FaArrowRight className='ml-2'/>
              </button>
            </div>
            <hr className='max-[600px]:hidden text-main-light my-3 text-lg border-2'/>
            <div className='grid grid-cols-3 sm:grid-cols-2 gap-2 text-sm sm:text-lg'>
              {channels.map((channel,i)=>{
                return (
                  <ChannelCard key={i} name={channel.name} />
                )
              })}
            </div>
            <hr className='max-[600px]:hidden text-main-light mt-3 text-lg border-1'/>
          </div>
        </>
    );
};

export default Channels;
