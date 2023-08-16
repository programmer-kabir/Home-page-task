import React from 'react';

const HelpFullTabsCard = ({ item }) => {
    const { title, image } = item;
    return (
        <div className='w-full'>
            <img className='w-full' src={image} alt="" />
            <div className='bg-slate-100 flex justify-between items-center' >
              <div className='bg-orange-600  px-5 p-2' style={{borderRadius:'0px 50px 0px 0px'}}>
              <img className='w-[40px] h-[40px] ' src='https://i.ibb.co/Zdhwy9G/10336358.png' alt="" />
              </div>
                <h2 className='text-2xl pr-5'>{title}</h2>
            </div>
        </div>
    );
};

export default HelpFullTabsCard;