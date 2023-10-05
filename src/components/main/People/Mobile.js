import React from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { FaArrowRight } from "react-icons/fa";

const MobilePeople = (props) => {
    const PeopleList = [
      {
        title: "Waseem Ahmad",
        subTitle: "User Interface Designer",
        views: ""
      },
      {
        title: "James Labrie",
        subTitle: "Frontend Dev",
        views: ""
      },
      {
        title: "John Doe",
        subTitle: "Backend Dev",
        views: ""
      },
      {
        title: "Michael Knight",
        subTitle: "System Analyst",
        views: ""
      },
      {
        title: "Ahmad Yasin",
        subTitle: "Dev Ops",
        views: ""
      },
    ]
    return (
        <div className='relative sm:hidden'>  
            <div className="">
                <div className='grid grid-cols-2 gap4 flex items-end my-2'>
                    <div className='text-main-light text-xl font-medium'>
                        People
                    </div>
                    <div className='text-main-light text-right flex items-center justify-end'>
                        View all <FaArrowRight className='ml-2'/>
                    </div>
                </div>
                <div className='min-h-8 h-40 w-full'></div>
                <div className='flex gap-2 absolute left-0 top-10 w-full overflow-y-scroll'>
                    {
                        PeopleList.map((people,i) => {
                            return (
                                <span key={i}>
                                    <CustomCard height="140px" minWidth="160px" title={people.title} subTitle={people.subTitle} views={people.views} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MobilePeople;
