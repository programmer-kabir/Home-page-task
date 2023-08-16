import React from 'react';
import TitleSection from '../../ShearSection/TitleSection/TitleSection';
import HelpFullTabs from './HelpFullTabs/HelpFullTabs';
import Content from '../Content';

const HelpfullServiceSection = () => {
    return (
        <Content>
           <div className='lg:w-full w-[500px] '>
           <div data-aos="fade-down">
           <div className='w-[400px] lg:w-full mx-auto '>
                <TitleSection title={'We Providing Helpfull Service'}></TitleSection>
            </div>


            <div>
                <HelpFullTabs></HelpFullTabs>
            </div>
            </div>
           </div>
        </Content>
    );
};

export default HelpfullServiceSection;