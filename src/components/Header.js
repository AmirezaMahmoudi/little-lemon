import React  from 'react';
import bannerImg from '../assets/restauranfood.jpg'
const Header = () => {
    return (
            <header className='header'>
                <section>
                    <div className='banner'>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred
                        with a modern twist.</p>
                       <button aria-label='On Click'>Reserve a table</button>
                    </div>
                </section>
             <div className='banner-img'>
                    <img src={bannerImg} alt="" />
            </div>
            </header>
        )
}
export default Header;