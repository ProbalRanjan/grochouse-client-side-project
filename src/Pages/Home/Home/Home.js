import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HeroBox from '../HeroBox/HeroBox';
import Inventories from '../Inventories/Inventories/Inventories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroBox></HeroBox>
            <About></About>
            <Inventories></Inventories>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;