import React from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { FaRegDotCircle } from "react-icons/fa";
import MobilePeople  from "./Mobile"

const People = (props) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 max-[600px]:hidden mt-8">
              <div className='col-span-2 flex items-end w-full'>
                <div className='grid grid-cols-2 gap-2 flex items-end w-full mb-2'>
                  <div className='text-main-light text-2xl font-medium'>
                    People
                  </div>
                  <button className='text-main-light text xl text-right'>
                    View all
                  </button>
                </div>
              </div>
              <div className='col-span-2 grid grid-rows-3 gap-2'>
                <div className='row-span-2'>
                  <CustomCard height="100%" title="Waseem Ahmad" subTitle="User Interface Designer" views="" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <CustomCard height="180px" title="" subTitle="John Stainior" views="" />
                  <CustomCard height="180px" title="" subTitle="John Doe" views="" />
                </div>
              </div>
              <div className="grid grid-rows-3 gap-2">
                <CustomCard height="180px" title="" subTitle="Michael Knight" views="" />
                <CustomCard height="180px" title="" subTitle="Ahmad Yasin" views="" />
                <div className='w-full bg-main rounded text-main-light hover:bg-main-light hover:text-main flex items-center justify-center p-2 border h-full' style={{borderColor:'#F4E3CF'}}>
                  <button className='flex items-center justify-center'>
                    <FaRegDotCircle className='text-3xl mr-2'/>
                    <div className='text-xl text-left'>
                        Show <br/> Your Work
                    </div>
                  </button>
                </div>
              </div>
              
            </div>
            <MobilePeople/>
        </>
    );
};

export default People;
