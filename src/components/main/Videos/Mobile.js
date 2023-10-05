import React from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { FaArrowRight } from "react-icons/fa";

const MobileVideos = (props) => {
    const VideoList = [
        {
          title: "How to improve your skills",
          subTitle: "Waseem Ahmad",
          views: 1007007
        },
        {
          title: "How to improve your skills",
          subTitle: "John Stainior",
          views: 2554
        },
        {
          title: "How to improve your skills",
          subTitle: "John Doe",
          views: 2554
        },
        {
          title: "How to improve your skills",
          subTitle: "Michael Knight",
          views: 25454
        },
        {
          title: "How to improve your skills",
          subTitle: "Ahmad Yasin",
          views: 1984
        },
    ]
    return (
        <div className='relative sm:hidden'>  
            <div className="">
                <div className='grid grid-cols-2 gap4 flex items-end my-2'>
                    <div className='text-main-light text-xl font-medium'>
                        Videos
                    </div>
                    <div className='text-main-light text-right flex items-center justify-end'>
                        Browse all videos <FaArrowRight className='ml-2'/>
                    </div>
                </div>
                <div className='min-h-8 h-40 w-full'></div>
                <div className='flex gap-2 absolute left-0 top-10 w-full overflow-y-scroll'>
                    {
                        VideoList.map((video,i) => {
                            return (
                                <span key={i}>
                                    <CustomCard height="160px" minWidth="260px" title={video.title} subTitle={video.subTitle} views={video.views} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MobileVideos;
