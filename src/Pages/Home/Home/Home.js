import React from 'react';
import HeroBox from '../HeroBox/HeroBox';
import Services from '../Services/Services';
import TopItems from '../TopItems/TopItems';

const Home = () => {
    return (
        <div>
            <HeroBox></HeroBox>
            <TopItems></TopItems>
            <Services></Services>
        </div>
    );
};

export default Home;