import React from 'react';
import Content from '../Content';
import TitleSection from '../../ShearSection/TitleSection/TitleSection';


import ServiceData from '../../Hook/ServiceData';
import ServiceBoxCard from '../ServiceBoxCard/ServiceBoxCard';

const ServiceSection = () => {
    const [boxData] = ServiceData()
 
    return (
        <Content >
            <div className='text-center mt-20 mb-20'>
            
                    <TitleSection title={'Our Service To Explore'} subTitle={' whether the problem is specific to this component or if it'}></TitleSection>
          
            </div>


            <div className='grid grid-cols-4 gap-5'>
                {
                    boxData.map(singleData => <ServiceBoxCard key={singleData.id} singleData={singleData}></ServiceBoxCard>)
                }
            </div>
        </Content>
    );
};

export default ServiceSection;