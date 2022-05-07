import React from 'react';
import Contact from '../Contact/Contact';
import HeroBox from '../HeroBox/HeroBox';
import TopItems from '../Items/Items/Items';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroBox></HeroBox>
            <TopItems></TopItems>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;