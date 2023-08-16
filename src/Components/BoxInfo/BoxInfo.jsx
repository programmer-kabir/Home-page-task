import React from 'react';
import Content from '../Content';

// icon import 
import icon1 from '../../../assest/image/boxInfoICon/2973322.png'
import icon2 from '../../../assest/image/boxInfoICon/money.png'
import icon3 from '../../../assest/image/boxInfoICon/service.png'
import icon4 from '../../../assest/image/boxInfoICon/support.png'

const BoxInfo = () => {
    return (
       <div className=' '>
         <Content className="text-gray-600  bg-white body-font ">
            <div className="container px-5 py-5 mx-auto shadow-xl">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            <img className='w-[100px]' src={icon1} alt="" />
                        </h2>
                        <p className="leading-relaxed">Satisfaction</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                        <img className='w-[100px]' src={icon2} alt="" />
                        </h2>
                        <p className="leading-relaxed">Subscribes</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2 text-center">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                        <img className='w-[100px]' src={icon3} alt="" />
                            
                        </h2>
                        <p className="leading-relaxed">Downloads</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                        <img className='w-[100px]' src={icon4} alt="" />
                            
                        </h2>
                        <p className="leading-relaxed">Products</p>
                    </div>
                </div>
            </div>
        </Content>
       </div>
    );
};

export default BoxInfo;

// **Problem = top 