import React from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { BsArrowUpCircle } from "react-icons/bs";
import MobileVideos  from "./Mobile"

const Videos = (props) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 max-[600px]:hidden">
              <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-2 flex items-end my-2'>
                  <div className='text-main-light text-2xl font-medium'>
                    Videos
                  </div>
                  <button className='text-main-light text xl text-right'>
                    Browse all videos
                  </button>
                </div>
              </div>
              <div className='col-span-2 grid grid-rows-3 gap-2'>
                <div className='row-span-2'>
                  <CustomCard height="100%" title="How to improve your skills" subTitle="Waseem Ahmad" views="107007" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <CustomCard height="180px" title="" subTitle="John Stainior" views="2554" />
                  <CustomCard height="180px" title="" subTitle="John Doe" views="2554" />
                </div>
              </div>
              <div className="grid grid-rows-3 gap-2">
                <CustomCard height="180px" title="" subTitle="Michael Knight" views="25454" />
                <CustomCard height="180px" title="" subTitle="Ahmad Yasin" views="1984" />
                <div className='w-full bg-main rounded text-main-light hover:bg-main-light hover:text-main flex items-center justify-center p-2 border h-full' style={{borderColor:'#F4E3CF'}}>
                  <button className='flex items-center justify-center'>
                    <BsArrowUpCircle className='text-3xl mr-2'/>
                    <div className='text-xl text-left'>
                        Upload <br/> Your Own video
                    </div>
                  </button>
                </div>
              </div>
              
            </div>
            <MobileVideos/>
        </>
    );
};

export default Videos;
