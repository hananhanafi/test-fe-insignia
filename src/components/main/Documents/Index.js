import React from 'react';
import DocumentCard from './DocumentCard';
import { AiOutlinePlusCircle } from "react-icons/ai";
import MobileDocuments  from "./Mobile"

const Documents = (props) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 max-[600px]:hidden mt-8">
              <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-2 flex items-end my-2'>
                  <div className='text-main-light text-2xl font-medium'>
                    Documents
                  </div>
                  <button className='text-main-light text xl text-right'>
                    Browse all documents
                  </button>
                </div>
              </div>
              <div className='col-span-2 grid grid-rows-3 gap-2'>
                <div className='row-span-2'>
                  <DocumentCard height="100%" title="Mobile ui & ux guid 2013" subTitle="User interface designer" views="187687" />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <DocumentCard height="180px" title="HTML & CSS" subTitle="Frontend Development" views="" />
                  <DocumentCard height="180px" title="HTML & CSS" subTitle="Frontend Development" views="" />
                </div>
              </div>
              <div className="grid grid-rows-3 gap-2">
                <DocumentCard height="180px" title="HTML & CSS" subTitle="Frontend Development" views="" />
                <DocumentCard height="180px" title="HTML & CSS" subTitle="Frontend Development" views="" />
                <div className='w-full bg-main rounded text-main-light hover:bg-main-light hover:text-main flex items-center justify-center p-2 border h-full' style={{borderColor:'#F4E3CF'}}>
                  <button className='flex items-center justify-center'>
                    <AiOutlinePlusCircle className='text-3xl mr-2'/>
                    <div className='text-xl text-left'>
                        Show <br/> Your Document
                    </div>
                  </button>
                </div>
              </div>
              
            </div>
            <MobileDocuments/>
        </>
    );
};

export default Documents;
