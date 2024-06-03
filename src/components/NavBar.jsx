import { useState } from "react"
import { Link } from "react-router-dom"
import logoWhite from '../assets/logo-white.png'
import './css/NavBar.css'

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
            <Link to={'/'}><img src={logoWhite} alt="Logo com a letra C" /></Link>
            <Link to={'/'} className="nome links">Cesar Santos</Link>
        </div>

        <ul className="desktop-links">
            <li>
                <Link to={'/'} className="links">Home</Link>
            </li>
            <li>
                <Link to={'/projetos'} className="links">Projetos</Link>
            </li>
            <li>
                <Link to={'/contato'} className="links">Contato</Link>
            </li>
        </ul>

      </nav>
  )
}

export default NavBar