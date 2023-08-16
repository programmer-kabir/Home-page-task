import React from 'react';

const TitleSection = ({title,subTitle}) => {
    return (
        <div className=' w-full mx-auto space-y-5 text-center py-10'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default TitleSection;