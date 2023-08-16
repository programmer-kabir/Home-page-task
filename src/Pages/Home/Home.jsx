import React from 'react';
import Banner from '../../Components/Banner/Banner';

import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import HelpfullServiceSection from '../../Components/HelpfulServiceSerction/HelpfullServiceSection';
import ServiceFrom from '../../Components/ServiceFrom/ServiceFrom';
import ReviewSection from '../../Components/ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSection></ServiceSection>
            <HelpfullServiceSection></HelpfullServiceSection>
            <ServiceFrom></ServiceFrom>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;