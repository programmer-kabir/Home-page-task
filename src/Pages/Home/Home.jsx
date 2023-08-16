import React, { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import HelpfullServiceSection from '../../Components/HelpfulServiceSerction/HelpfullServiceSection';
import ServiceFrom from '../../Components/ServiceFrom/ServiceFrom';
import ReviewSection from '../../Components/ReviewSection/ReviewSection';
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div className='lg:overflow-auto overflow-y-auto'>
            <Banner ></Banner>
            <ServiceSection></ServiceSection>
            <HelpfullServiceSection></HelpfullServiceSection>
            <ServiceFrom></ServiceFrom>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;