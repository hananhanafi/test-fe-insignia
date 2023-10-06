import React, { useEffect, useState } from 'react';
import CustomCard from '../../shared/custom/CustomCard';
import { FaRegDotCircle } from "react-icons/fa";
import MobilePeople  from "./Mobile"
import DummyAPI from '../../../repositories/DummyAPI';

const People = (props) => {
  const [userList, setUserList] = useState([]);
  const [rowLengthList, setRowLengthList] = useState(0);
  const [params, setParams] = useState({
    page: 1,
    limit: 10
  });
  // get user list from api
  useEffect(()=> {
      DummyAPI.getUserList(params)
      .then((res)=>{
          const resData = res.data
          setUserList(resData?.data ??[])
      });
  }, [params])

  useEffect(()=> {
    const rowlnList = userList.length%3 === 0 ? (userList.length/3)+1 : Math.ceil(userList.length/3)
    setRowLengthList(rowlnList)
  }, [userList])

  const renderButtonAction = () => {
    return <div className='basis-1/3 bg-main rounded text-main-light hover:bg-main-light hover:text-main flex items-center justify-center p-2 border' style={{borderColor:'#F4E3CF',minHeight:'180px'}}>
      <button className='flex items-center justify-center'>
        <FaRegDotCircle className='text-3xl mr-2'/>
        <div className='text-xl text-left'>
            Show <br/> Your Work
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
                    People
                  </div>
                  <button className='text-main-light text xl text-right w-full'>
                    View all
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
                    {userList[0] && <CustomCard className="basis-2/3" height="100%" minHeight="368px" title={userList[0].firstName + ' ' + userList[0].lastName} subTitle={userList[0].id} views="" />}
                    <div className='basis-1/3 flex flex-col gap-2'>
                      {userList.slice(1,3).map((item, j) => {
                        return (<CustomCard key={j+'_1'} height="180px" title={item.firstName + ' ' + item.lastName} subTitle={item.id}  views={item.views || ''} />)
                      })}
                      {(!userList[1] || !userList[2]) && renderButtonAction()}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={i} className='flex gap-2'>
                    {userList.slice(i*3,(i*3)+3).map((item, k) => {
                      return (
                          <CustomCard key={i+'_'+k} height="180px" className="basis-1/3" title={item.firstName + ' ' + item.lastName} subTitle={item.id} views={item.views || ''} />
                      )
                    })}
                    {!userList[(i*3)+2] && renderButtonAction()}
                    {/* fix inconsistent width caused by flex basis 33.33% */}
                    {(!userList[(i*3)+2] && (userList.length+1)%3!==0) && <div className='basis-1/3'></div>} 
                  </div>
                )
              }
            })}
        </div>
        <MobilePeople list={userList}/>
      </>
  );
};

export default People;
