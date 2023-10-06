import React, { useEffect, useState } from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { BsArrowUpCircle } from "react-icons/bs";
import MobileVideos  from "./Mobile"
import DummyAPI from '../../../repositories/DummyAPI';

const Videos = (props) => {
  const [list, setList] = useState([]);
  const [rowLengthList, setRowLengthList] = useState(0);
  const [params, setParams] = useState({
    page: 1,
    limit: 5
  });
  // get user list from api
  useEffect(()=> {
      DummyAPI.getPostList(params)
      .then((res)=>{
          const resData = res.data
          setList(resData?.data ??[])
      });
  }, [params])

  useEffect(()=> {
    const rowlnList = list.length%3 === 0 ? (list.length/3)+1 : Math.ceil(list.length/3)
    setRowLengthList(rowlnList)
  }, [list])

  const renderButtonAction = () => {
    return <div className='basis-1/3 bg-main rounded text-main-light hover:bg-main-light hover:text-main flex items-center justify-center p-2 border' style={{borderColor:'#F4E3CF',minHeight:'180px'}}>
      <button className='flex items-center justify-center'>
        <BsArrowUpCircle className='text-3xl mr-2'/>
        <div className='text-xl text-left'>
            Upload <br/> Your Own video
        </div>
      </button>
    </div>
  }

  return (
      <>
        <div className="flex flex-warp gap-2 flex-col max-[600px]:hidden mt-8">
            <div className='flex gap-2'>
              <div className='basis-2/3 flex w-full justify-between'>
                  <div className='text-main-light text-2xl font-medium w-full'>
                    Videos
                  </div>
                  <button className='text-main-light text xl text-right w-full'>
                    Browse all videos
                  </button>
              </div>
              <div className='basis-1/3'></div>
            </div>

            {rowLengthList === 0 && renderButtonAction()}
            {[...Array(rowLengthList)].map((item, i) => {
              if(i===0) {
                // render first row
                return (
                  <div key={i} className='flex gap-2'>
                    {list[0] && <CustomCard className="basis-2/3" height="100%" minHeight="368px" title={list[0].text} subTitle={list[0].owner.firstName + ' ' + list[0].owner.lastName} views={list[0].likes || ''} />}
                    <div className='basis-1/3 flex flex-col gap-2'>
                      {list.slice(1,3).map((item, j) => {
                        return (<CustomCard key={j+'_1'} height="180px" title={item.text} subTitle={item.owner.firstName + ' ' + item.owner.lastName}  views={item.likes || ''} />)
                      })}
                      {(!list[1] || !list[2]) && renderButtonAction()}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={i} className='flex gap-2'>
                    {list.slice(i*3,(i*3)+3).map((item, k) => {
                      return (
                          <CustomCard key={i+'_'+k} height="180px" className="basis-1/3" title={item.text} subTitle={item.owner.firstName + ' ' + item.owner.lastName} views={item.likes || ''} />
                      )
                    })}
                    {!list[(i*3)+2] && renderButtonAction()}
                    {/* fix inconsistent width caused by flex basis 33.33% */}
                    {(!list[(i*3)+2] && (list.length+1)%3!==0) && <div className='basis-1/3'></div>} 
                  </div>
                )
              }
            })}
        </div>
        <MobileVideos list={list}/>
      </>
  );
};

export default Videos;
