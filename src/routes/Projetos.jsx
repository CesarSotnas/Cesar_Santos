import Card from '../components/Card'
import { Link } from 'react-router-dom'
import './css/Projetos.css'
import dash1 from '../assets/dash1.jpeg'
import dash2 from '../assets/dash2.jpeg'
import dash3 from '../assets/dash3.jpeg'
import dash4 from '../assets/dash4.jpeg'
import note1 from '../assets/note1.jpeg'
import note2 from '../assets/note2.jpeg'


const Projetos = () => {
  return (
    <div className='home-container'>
      <div className='img-empreendedor'>
      </div>
      <h2>Principais projetos:</h2>
      <div className="tabela-cards">
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMDllZmNkOTMtOGYxOC00NGI1LWI1NjEtOWEzY2EwN2QzOGVlIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash1} /></ Link>
          <p>Análise de Dados - Dashboard - Base de vendas, loja de lubrificantes.</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiYTliNjdiNjMtM2IzNC00NDk1LTkyMDgtMTZmOGE2YzM5OGRmIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash2}/></Link>
        <p>Análise de Dados - Dashboard - Segmentos e receitas durante 2022</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiNWE5YzI3MWEtYmU4Zi00MGZlLWIzNmUtYTU3ZTQ1NTMxMmU0IiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash3} /></Link>
          <p>Análise de Dados - Dashboard - Materiais de papelaria.</p>
        </div>
        <div className="cards"> 
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMzVlYWYzMTktMzEyOS00ZTE4LTg5OTAtNmUwZTUwOTc3ZDNhIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img = {dash4} /></Link>
          <p>Análise de Dados - Dashboard - Análise descritiva, marketing digital.</p>
        </div>
        <div className="cards cards-notebooks">
          <Link to='https://www.kaggle.com/code/devcesar/projeto-analise-de-dados' target='_blank'><Card img = {note1} /></ Link>
          <p>Notebook - Análise de dados de clientes de banco.</p>
        </div>
        <div className="cards cards-notebooks">  
          <Link to='https://github.com/CesarSotnas/CesarSotnas-ExercicioPlotagemPython/blob/main/modulo_6_tarefa_3.ipynb' target='_blank'><Card img = {note2} /></ Link>
          <p>Notebook - Tratamento base de dados Sinasc_2019 - Rondônia.</p>
        </div>            
      </div>
    </div>
  )
}

export default Projetos