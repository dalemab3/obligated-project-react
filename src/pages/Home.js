import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { homeObjOne ,homeObjThree } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection2/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); //set state of Sidebar to either open or not open//
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} /> 
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection2 {...homeObjTwo} />

        </>
    );
};

export default Home; 