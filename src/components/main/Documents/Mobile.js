import React from 'react';
import DocumentCard from './DocumentCard';
import { FaArrowRight } from "react-icons/fa";

const MobileDocuments = (props) => {
    const DocumentList = [
      {
        title: "Mobile ui & ux guide 2013",
        subTitle: "User interface designer",
        views: "187687"
      },
      {
        title: "HTML & CSS",
        subTitle: "Frontend Development",
        views: "18787"
      },
      {
        title: "HTML & CSS",
        subTitle: "Frontend Development",
        views: "18787"
      },
      {
        title: "HTML & CSS",
        subTitle: "Frontend Development",
        views: "18787"
      },
      {
        title: "HTML & CSS",
        subTitle: "Frontend Development",
        views: "18787"
      },
    ]
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
                <div className='min-h-8 h-40 w-full'></div>
                <div className='flex gap-2 absolute left-0 top-10 w-full overflow-y-scroll'>
                    {
                        DocumentList.map((doc,i) => {
                            return (
                                <span key={i}>
                                    <DocumentCard height="160px" minWidth="150px" title={doc.title} subTitle={doc.subTitle} views={doc.views} />
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
