import React from 'react';
import DocumentCard from './DocumentCard';
import { FaArrowRight } from "react-icons/fa";

const MobileDocuments = (props) => {
    const DocumentsList = props.list || []
    return (
        <div className='relative sm:hidden'>  
            <div className="">
                <div className='grid grid-cols-2 gap4 flex items-end my-2'>
                    <div className='text-main-light text-xl font-medium'>
                        Documents
                    </div>
                    <div className='text-main-light text-right flex items-center justify-end'>
                        Browse all <FaArrowRight className='ml-2'/>
                    </div>
                </div>
                <div className='min-h-8 h-48 w-full'></div>
                <div className='flex gap-2 absolute left-0 top-10 w-full overflow-y-scroll'>
                    {
                        DocumentsList.map((video,i) => {
                            return (
                                <span key={i}>
                                    <DocumentCard height="160px" minWidth="150px" maxWidth="150px" title={video.message} subTitle={video.owner.firstName + ' ' + video.owner.lastName} views={video.likes || '100'} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MobileDocuments;
