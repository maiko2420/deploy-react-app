import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SeenItem from '../seen-item';
import { Fade } from 'react-bootstrap';

SeenPage.propTypes = {

};


function SeenPage() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide == 1 ? 0 : slide + 1)
        gsap.fromTo(
            '.lst-seen',
            { x: '50px', opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
        );
    }
    const prevSlide = () => {
        setSlide(slide == 0 ? 1 : slide - 1)
        gsap.fromTo(
            '.lst-seen',
            { x: '-50px', opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
        );
    }



    const list = []
    if (slide == 0) {
        for (let i = 0; i < 5; i++) {
            list.push(
                <SeenItem key={i} name='' image='' cost=''></SeenItem>
            );
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            list.push(
                <SeenItem key={i} name='' image='' cost=''></SeenItem>
            );
        }
    }
    return (
        <div className='carousel'>
            <div className='lst-seen'>

                {list}
            </div>
            <div className="icon-left" onClick={prevSlide}>
                <FontAwesomeIcon icon={faAnglesLeft} className='iconPrevSeen' />
            </div>
            <div className="icon-right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faAnglesRight} className='iconNextSeen' />
            </div>
        </div>
    );
}

export default SeenPage;