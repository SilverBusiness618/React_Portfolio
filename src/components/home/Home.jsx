import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import Photo from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Photo} alt="" className='home__img' width='250' />
                <h1 className="home__name">Alysson Medeiros</h1>
                <span className="home__education">I'm a Senior Full Stack Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home