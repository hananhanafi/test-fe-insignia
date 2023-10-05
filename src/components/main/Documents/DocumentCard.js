import React from 'react';

const DocumentCard = (props) => {
    const height = props.height || '40px'
    const width = props.width || '100%'
    const minWidth = props.minWidth || '100%'
    return (
      <>
        <div className='w-full bg-main-light flex items-end p-2 rounded' style={{height:height,width:width,minWidth}}>
            <div className='w-full text-main'>
                <div className='text-sm sm:text-lg font-semibold'>
                    {props.title || ''}
                </div>
                <div className='w-full text-xs sm:text-base text-main sm:flex sm:justify-between'>
                    <div>
                        {props.subTitle || ''}
                    </div>
                    <div className='w-8 h-0.5 bg-main my-2 sm:hidden'></div>
                    <div className='font-medium sm:font-normal text-xs sm:text-base'>
                        {props.views ? props.views + ' views'  : ''}
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default DocumentCard;
