import React from 'react';
import Content from '../Content';

// baner img 
import banerImg from '../../../assest/image/banner/1000_F_408853106_oXOs2FtaqzIU5GdV4eDwgINIyKquDFNs.jpg'
import rigtSide from '../../../assest/image/banner/rightside.jpeg'
import BoxInfo from '../BoxInfo/BoxInfo';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -3,
        height: '700px', // Set the desired height for your banner

    };
    const overlayStyle = {
        content: '',
        position: 'absolute',
        top: 80,
        left: 0,
        // zIndex: -,
        width: '100%',
        height: '620px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Blue overlay with 50% opacity
    };
    const boxInfoStyle = {
        position: 'relative', // Make sure BoxInfo has a positioned parent
        zIndex: 30,
        // Adjust this value based on your layout needs
    };
    return (
        <div>
            <div className='banner ' style={bannerStyle} >
                <div style={overlayStyle}>
                    <Content >

                        <div className='lg:flex lg:justify-between items-center h-[700px] py5 lg:py-0 lg:px-0 px-5 '>
                            <div className='  lg:w-[40%] w-[300px] 
                            sm:h-[300px] lg:hidden justify-end '>
                                <img className=' w-[300px] h-[300px] border-8 border-blue-400 rounded-full' src={rigtSide} alt="" />
                            </div>
                            <div className='space-y-10 lg:w-[60%] w-[40%] lg:pr-0 pr-5'>
                                <h2 className='lg:text-7xl pt-5 text-4xl font-semibold text-white'>
                                    Repair Offer The  best Home service 
                                    </h2>
                                <p className='text-white'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut, mollitia

                                </p>
                                <button className='btn bg-[#F25109] text-white p-2 px-5 rounded'>
                                    Contact us
                                </button>
                            </div>
                            <div className='hidden   lg:w-[40%] w-[300px] 
                            sm:h-[300px] lg:flex justify-end '>
                                <img className=' w-[400px] h-[400px] border-8 border-blue-400 rounded-full' src={rigtSide} alt="" />
                            </div>
                        </div>
                    </Content>
                </div>


            </div>
            <BoxInfo style={boxInfoStyle}></BoxInfo>
        </div>
    );
};

export default Banner;