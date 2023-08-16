 
import React from 'react';

const Content = ({children}) => {
    return (
        <div className='w-[1280px] lg:mx-auto'>
            {children}
        </div>
    );
};

export default Content;