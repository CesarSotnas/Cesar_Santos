import imgPerfil from '../assets/imgPerfil.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './css/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='img-empreendedor'>
      </div>
      <div className="intro-container">
          <div className="img-perfil-logos">
            <img className='img-perfil' src={imgPerfil} alt="Foto de peril" />
            <section className="links-logos">
              <Link to = 'https://www.linkedin.com/in/cesar--santos/' target='_blank'><FaLinkedin size={50}/></Link>
              <Link to = 'https://github.com/CesarSotnas' target='_blank'><FaGithub size={50}/></Link>
              <Link to = 'https://www.kaggle.com/devcesar' target='_blank'><FaKaggle size={50}/></Link>
            </section>
          </div>
          <section className="texto-descricao">
            <p>
              Olá, me chamo Cesar Santos, Empreendedor Digital.<br /><br />
            </p>
            <p>
              Profissional com mais de 7 anos de experiência na área suporte em T.I, decidi seguir carreira na área de programação e  
              análise de dados depois de perceber que já utilizava todo o processo de ELT, automações em Python e Javascript no meu dia a dia.
            </p> <br />
            <p>
              Formado em Sistemas para Internet pela Estácio, tenho conhecimento no desenvolvimento de sites e no momento estou  cursando <br />
              uma Pós-Graduação em Ciência de Dados e Inteligência Artificial pela UNINTER.<br /><br /> 

              Soft Skills:<br />                                                   
              Pró-atividade | Pensamento analítico | Curioso<br /><br />

              Hard Skills:<br />
              Javascript | Python | SQL | Power BI | ETL | Excel | Google Sheets<br /><br />


              Habilidades em desenvolvimento:<br />

              Estatística e probabilidade | Power BI (DAX e linguagem M) 
            </p>
          </section>
        </div>
      </div>
  )
}

export default Home