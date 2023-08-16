import React from 'react';
import TitleSection from '../../ShearSection/TitleSection/TitleSection';
import HelpFullTabs from './HelpFullTabs/HelpFullTabs';
import Content from '../Content';

const HelpfullServiceSection = () => {
    return (
        <Content>
            <TitleSection title={'We Providing Helpfull Service'}></TitleSection>

            <div>
                <HelpFullTabs></HelpFullTabs>
            </div>
        </Content>
    );
};

export default HelpfullServiceSection;