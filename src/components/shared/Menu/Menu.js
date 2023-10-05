import React from 'react';

const Menu = (props) => {
    const MenuList = props.data || [] 
    const fontSize = props.fontSize || '16px'
    return (
      <>
        <div className='py-2 text-main-soft'>
          {MenuList.map((bread,index) =>{
              return (
              <span key={index} >
                <button style={{fontSize:fontSize}}>
                    {bread}
                </button>
                <span className='mx-3 sm:hidden'></span>
                <span className='mx-4 max-[600px]:hidden'>{index < MenuList.length-1 && '/ '} </span>
              </span>)
          })}
        </div>
      </>
    );
};

export default Menu;
