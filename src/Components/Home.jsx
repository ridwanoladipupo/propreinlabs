import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name="Unlocking the Potential of Scientific Discovery"
                desc="At Proprein Labs, our state-of-the-art laboratory and team of experts are dedicated to unlocking the potential of scientific discovery, pushing the boundaries of what is possible, and making a lasting impact on human health and well-being."
                imgsrc={home} 
                isCompName={true}
                visit='/services' 
            />
        </>
    )
}

export default Home;