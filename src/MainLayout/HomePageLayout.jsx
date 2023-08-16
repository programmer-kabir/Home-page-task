import React from 'react';

import Footer from '../ShearSection/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../ShearSection/Header/Header';

const HomePageLayout = () => {
    return (
        <div>
            <div className='fixed w-full z-10'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomePageLayout;