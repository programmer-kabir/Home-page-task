import React from 'react';
import Content from '../Content';
import TitleSection from '../../ShearSection/TitleSection/TitleSection';


import ServiceData from '../../Hook/ServiceData';
import ServiceBoxCard from '../ServiceBoxCard/ServiceBoxCard';

const ServiceSection = () => {
    const [boxData] = ServiceData()

    return (
        <Content >
            <div className='lg:w-full w-[500px]'>
                <div className=' mt-20 mb-5 lg:w-full w-[300px] mx-auto'>

                    <TitleSection title={'Our Service To Explore'}
                    >
                    </TitleSection>
                    <p className='text-center'>whether the problem is specific to this component or if it</p>
                </div>


                <div className='grid lg:grid-cols-4 lg:w-full
     w-[300px] mx-auto gap-5'>
                    {
                        boxData.map(singleData => <ServiceBoxCard key={singleData.id} singleData={singleData}></ServiceBoxCard>)
                    }
                </div>
            </div>
        </Content>
    );
};

export default ServiceSection;