import React from "react";
import Logo from '../assets/Asset 18@4x.png'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="info">
                    <img src={Logo}  alt="footer-logo"/>
                </div>
                <div>
                    <h3> Doormat <br/>Navigation </h3>
                    <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Reservations</a></li>
                  <li><a href="#">Order online</a></li>
                  <li><a href="#">Login</a></li>
                 </ul>
                </div>
                <div>
                    <h3> Contacts</h3>
                    <ul>
                  <li><a href="#">Address</a></li>
                  <li><a href="#">Phone Number</a></li>
                  <li><a href="#">Email</a></li>
                 </ul>
                </div>
                <div>
                    <h3>Social media links</h3>
                    <ul>
                  <li><a href="#">Address</a></li>
                  <li><a href="#">Phone Number</a></li>
                  <li><a href="#">Email</a></li>
                 </ul>
                </div>
            </section>
        </footer>
    )
}
export default Footer;