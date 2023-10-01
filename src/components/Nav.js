import Logo from '../assets/Asset 16@4x.png'

function Nav() {
    return (
      <nav className="navbar">
        <a href="/">
     <img src={Logo} className="main-logo"/>
         </a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      </nav>
    );
  }

  export default Nav;
