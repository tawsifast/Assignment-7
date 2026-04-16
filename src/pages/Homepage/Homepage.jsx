import React, { Suspense } from 'react';
import Banner from '../../components/Homepage/Banner';
import Footer from '../../components/shared/Footer';
import FriendsSection from '../../components/Homepage/FriendsSection/FriendsSection';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Suspense fallback={<div className="text-center my-10">
                <span className="loading loading-spinner loading-lg"></span>
                </div>}>
             <FriendsSection/>
            </Suspense>
           
            
        </div>
    );
};

export default Homepage;