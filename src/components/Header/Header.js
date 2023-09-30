import Style from './header.css'
import Logo from '../../assets/Asset 16@4x.png'
function Header() {

  return (
    <header className={Style.img} >
        <img src={Logo} alt="header-logo"  />
    </header>
    );
  }
export default Header;