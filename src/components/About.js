import React  from 'react';
import LogoA from '../assets/Mario and Adrian A.jpg'
import LogoB from '../assets/Mario and Adrian b.jpg'

const About = () => {
    return (
            <header className='header-about'>
                <section>
                    <div className='banner'>
                        <h2 id="about-little">Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            The chefs draw inspiration from Italian, Greek, and Turkish culture.
                        Little Lemon is owned by two Italian brothers,
  Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                    </div>
                </section>
             <div >
                <img className="about-us-pic a" src={LogoA} alt='pic a' id="pic1"></img>
                <img  className="about-us-pic a" src={LogoB} alt='pic b' id="pic2"></img>
            </div>
            </header>
        )
}
export default About;