import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './css/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="links-logos-footer">
            <Link to = 'https://www.linkedin.com/in/cesar--santos/' target='_blank' className="links-logos-footer-a"><FaLinkedin size={50}/></Link>
            <Link to = 'https://github.com/CesarSotnas' target='_blank' className="links-logos-footer-a"><FaGithub size={50}/></Link>
            <Link to = 'https://www.kaggle.com/devcesar' target='_blank' className="links-logos-footer-a"><FaKaggle size={50}/></Link>
        </section>
        <p>&copy; 2024 - Cesar Santos</p>
    </div>
  )
}

export default Footer