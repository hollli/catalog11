import React, {useState, useEffect} from 'react';

import '../About.scss';
const About = () => {

    return (
        <div className='mainAbout'>

            <p>Welcome to our game catalog! We strive to provide a diverse collection of games for all types of gamers.
                Whether you're into action, adventure, strategy, or simulation, we've got something for you. Our catalog
                is regularly updated with the latest releases and classics alike.</p>
            <p>At our core, we're passionate about gaming and believe in the power of games to entertain, challenge, and
                inspire. Our team works hard to curate a selection that reflects this passion and diversity, ensuring
                that there's always something new and exciting to discover.</p>

            <div className="cat">
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="face">
                    <div className="eye eye--left">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="eye eye--right">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="muzzle"></div>
                </div>
            </div>
            <p>Thank you for choosing our game catalog. We hope you find something that sparks your interest and brings
                you hours of enjoyment. Happy gaming!</p>
        </div>

    );
};

export default About;
