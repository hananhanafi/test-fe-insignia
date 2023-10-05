import React from 'react';
import ActivityCard from './ActivityCard';
import { FaArrowRight } from "react-icons/fa";

const Activity = (props) => {
    const activities = [
      {
        name: 'John Satinior',
        activityname: 'commented',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 1000000),
        activityType: 'comment',
      },
      {
        name: 'John Satinior',
        activityname: 'added a new video',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 2000000),
        activityType: 'video',
      },
      {
        name: 'John Satinior',
        activityname: 'shared a document',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 3000000),
        activityType: 'document',
      },
      {
        name: 'John Satinior',
        activityname: 'unlocked a new badge',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 3000000),
        activityType: 'badge',
      },
      {
        name: 'John Satinior',
        activityname: 'uploaded a new video',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 4000000),
        activityType: 'video',
      },
      {
        name: 'John Satinior',
        activityname: 'liked a video',
        activityDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet',
        activityTime: new Date(Date.now() - 9000000),
        activityType: 'like',
      },
    ]
    return (
        <>
        <div className='w-full my-4'>
            <div className='grid grid-cols-2 gap4 flex items-end'>
              <div className='text-main-light text-xl font-medium sm:text-2xl'>
                Activity
              </div>
              <button className='hidden sm:inline text-main-light text-right'>
                View timeline / Filter activities
              </button>
              <button className='sm:hidden text-main-light text-right flex items-center justify-end'>
                View timeline <FaArrowRight className='ml-2'/>
              </button>
            </div>
            <hr className='max-[600px]:hidden text-main-light my-3 text-lg border-2'/>
            <div>
              {activities.map((activity,i)=>{
                return (
                  <ActivityCard key={i} name={activity.name} activityName={activity.activityname} activityDescription={activity.activityDescription} activityTime={activity.activityTime} activityType={activity.activityType}/>
                )
              })}
            </div>
            <hr className='max-[600px]:hidden text-main-light mt-3 text-lg border-1'/>
          </div>
        </>
    );
};

export default Activity;
