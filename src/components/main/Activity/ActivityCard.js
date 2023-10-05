import React, { useState } from 'react';
import { BsChatFill } from "react-icons/bs";
import { FaTimes } from 'react-icons/fa'
import { ImVideoCamera } from 'react-icons/im';
import { HiOutlineDocument } from 'react-icons/hi2';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillUnlock } from 'react-icons/ai';
import moment from 'moment' 

const ActivityCard = (props) => {
    const [isShowButton, setisShowButton] = useState(false)
    const [diffActivityTime, setDiffActivityTime] = useState(moment(props.activityTime || new Date()).fromNow())
    // const [diffActivityTime, setDiffActivityTime] = useState(moment.duration(props.activityTime, "minutes").humanize(true))
    
    const activityIcon = function(type) {
        if(type === "video") {
            return <ImVideoCamera className='mr-1'/>
        }else if(type === "document") {
            return <HiOutlineDocument className='mr-1'/>
        }else if(type === "like") {
            return <AiFillHeart className='mr-1'/>
        }else if(type === "badge") {
            return <AiFillUnlock className='mr-1'/>
        }else {
            return <BsChatFill className='mr-1'/>
        }

    }
    return (
      <>
        <div className='grid grid-cols-4 gap-2 text-main-light p-2 my-2 relative max-[600px]:bg-main-light  max-[600px]:bg-opacity-10
         hover:border overflow-hidden rounded'
         onMouseEnter={()=>{setisShowButton(true)}}
         onMouseLeave={()=>{setisShowButton(false)}}
         >
            <div className='bg-main-light h-full rounded'>
            </div>
            <div className='col-span-3'>
                <div>
                    <span className='font-semibold mr-2 truncate ...'>{props.name || '-'}</span>
                    <span className='truncate text-xs ...'>{props.activityName || '-'}</span>
                </div>
                <p className='text-sm truncate ...'>
                    {props.activityDescription || '-'}
                </p>
                <p className='flex items-center text-sm truncate ...'>
                    {activityIcon(props.activityType)} {diffActivityTime}
                </p>
            </div>
            {isShowButton &&  <div className='absolute top-0 right-0 text-main-light text-xs'>
                <button>
                    <div style={{width:'0px',height:'0px',borderStyle:'solid',borderWidth:'0 25px 25px 0',borderColor:'transparent #F4E3CF transparent transparent',transform:'rotate(0deg)'}}></div>
                    <FaTimes className='text-main z-10 absolute top-0 right-0'/>
                </button>
            </div>}
        </div>
      </>
    );
};

export default ActivityCard;
