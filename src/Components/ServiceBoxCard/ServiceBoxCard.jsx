import React from 'react';

const ServiceBoxCard = ({singleData}) => {
    const {title,description,icon}=singleData;
    return (
        <div data-aos="zoom-out-down">
        <div className='text-center bg-slate-200 p-4 rounded-sm space-y-5'>
            
            <img className='w-[80px] h-[80px] mx-auto' src={icon} alt="" />
            <h2 className='text-2xl font-semibold '>{title}</h2>
            <p className='text-sm'>{description}</p>
            <button className='btn text-red-500'>read more...</button>
        </div>
        </div>
    );
};

export default ServiceBoxCard;