import React from 'react';

const CustomCard = (props) => {
    const height = props.height || '180px'
    // const width = props.width || '100%'
    const minWidth = props.minWidth || '40px'
    const minHeight = props.minHeight || '180px'
    return (
      <>
        <div className={'bg-main-light flex items-end p-2 rounded ' +  props.className} style={{height:height,minHeight:minHeight,minWidth:minWidth}}>
            <div className='w-full text-main'>
                <div className='text-sm sm:text-lg font-semibold'>
                    {props.title || ''}
                </div>
                <div className='w-full text-xs sm:text-base text-main sm:flex sm:justify-between'>
                    <div>
                        {props.subTitle || ''}
                    </div>
                    <div className='font-medium sm:font-normal text-xs sm:text-base'>
                        {props.views ? props.views + ' views'  : ''}
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default CustomCard;
