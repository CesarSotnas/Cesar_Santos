import Card from '../components/Card'
import { Link } from 'react-router-dom'
import './css/Projetos.css'
import dash1 from '../assets/dash1.jpeg'
import dash2 from '../assets/dash2.jpeg'
import dash3 from '../assets/dash3.jpeg'
import dash4 from '../assets/dash4.jpeg'

const Projetos = () => {
  return (
    <div className='projeto-container'>
      <div className='img-empreendedor'>
      </div>
      <h2>Principais projetos:</h2>
      <div className="tabela-cards">
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMDllZmNkOTMtOGYxOC00NGI1LWI1NjEtOWEzY2EwN2QzOGVlIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash1} /></ Link>
          <p className="texto-cards">Análise de Dados - Dashboard - Base de vendas, loja de lubrificantes.</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiYTliNjdiNjMtM2IzNC00NDk1LTkyMDgtMTZmOGE2YzM5OGRmIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash2}/></Link>
        <p className="texto-cards">Análise de Dados - Dashboard - Segmentos e receitas durante 2022</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiNWE5YzI3MWEtYmU4Zi00MGZlLWIzNmUtYTU3ZTQ1NTMxMmU0IiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash3} /></Link>
          <p className="texto-cards">Análise de Dados - Dashboard - Materiais de papelaria.</p>
        </div>
        <div className="cards"> 
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMzVlYWYzMTktMzEyOS00ZTE4LTg5OTAtNmUwZTUwOTc3ZDNhIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash4} /></Link>
          <p className="texto-cards">Análise de Dados - Dashboard - Análise descritiva, marketing digital.</p>
        </div>         
      </div>
    </div>
  )
}

export default Projetos;