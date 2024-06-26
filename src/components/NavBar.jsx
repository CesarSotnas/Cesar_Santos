import logoWhite from '../assets/logo-white.png'
import { HashLink as Link } from 'react-router-hash-link';
/* import { Link } from "react-router-dom" */
import { useState } from "react"
import './css/NavBar.css';

const NavBar = () => {
  const [navBar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 100) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navBar ? "navbar active" : "navbar"}>
        <div className="logo-e-nome">
            <Link to='/#home-id'><img src={logoWhite} alt="Logo com a letra C" /></Link>
            <Link to='/#home-id' className="nome links">Cesar Santos</Link>
        </div>

        <ul className="desktop-links">
            <li>
                <Link to='/' className="links">Home</Link>
            </li>
            <li>
                <Link to='projetos#projetos-id' className="links">Projetos</Link>
            </li>
            <li>
                <Link to='contato#contato-id' className="links">Contato</Link>
            </li>
        </ul>

      </nav>
  )
}

export default NavBar