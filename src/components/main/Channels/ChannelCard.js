import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'

const ChannelCard = (props) => {
    const [isShowButton, setisShowButton] = useState(false)
    return (
      <>
        <div className='text-main bg-main-light p-2 my-2 relative hover:border overflow-hidden min-h-20 h-20 sm:h-40 flex justify-center sm:justify-start items-center sm:items-end rounded'
         onMouseEnter={()=>{setisShowButton(true)}}
         onMouseLeave={()=>{setisShowButton(false)}}
         >
            <span className='font-semibold text-center'>
                {props.name || '-'}
            </span>
            {isShowButton &&  <div className='absolute top-0 right-0 text-main-light text-xs'>
                <button>
                    <div style={{width:'0px',height:'0px',borderStyle:'solid',borderWidth:'0 25px 25px 0',borderColor:'transparent #953E46 transparent transparent',transform:'rotate(0deg)'}}></div>
                    <FaPlus className='text-main-light z-10 absolute top-0 right-0'/>
                </button>
            </div>}
        </div>
      </>
    );
};

export default ChannelCard;
