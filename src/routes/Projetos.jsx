import Card from '../components/Card'
import { Link } from 'react-router-dom'
import './css/Projetos.css'

const Projetos = () => {
  return (
    <div className='home-container'>
      <div className='img-empreendedor'>
      </div>
      <h2>Principais projetos:</h2>
      <div className="tabela-cards">
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMDllZmNkOTMtOGYxOC00NGI1LWI1NjEtOWEzY2EwN2QzOGVlIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img ='https://lh3.googleusercontent.com/1FajdVEDdLRTZzrfvMJgCQ0iyL2b324lFAbfIHZmXg5ptonFFY7KMD4I3SENK_e1FrhDBs08YEo75jrxpXTpfNQl4D5ojVvbBm7mrGew3gAokTguazaL27H_sxl1GZtSrw=w1280' /></ Link>
          <p>Análise de Dados - Dashboard - Base de vendas, loja de lubrificantes.</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiYTliNjdiNjMtM2IzNC00NDk1LTkyMDgtMTZmOGE2YzM5OGRmIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img ='https://lh4.googleusercontent.com/3E1wuAtJCAwlRz2q3Pw4UCopLJXAFCBMJmo8S_Kh3iGu1tadbqyLlkkLeqfs7vVzmrhR_yMFvXC5An2OOfxrGBhxz1GTUthR7T64PLZPKq19PR-ytl56nPt63ZQM888SEQ=w1280' /></Link>
        <p>Análise de Dados - Dashboard - Segmentos e receitas durante 2022</p>
        </div>
        <div className="cards">
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiNWE5YzI3MWEtYmU4Zi00MGZlLWIzNmUtYTU3ZTQ1NTMxMmU0IiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img ='https://lh6.googleusercontent.com/y40iDK1EJQc0FrqHIZmcsUcxuH6QGnIOuId6WMm-MWEul5E4bdxMyaOiUZMSz-dYwZuobhgkZC2x4DeR3uvoJ6oV6iRZuU7lhF-RLScJkm0rXxV3xTKENDhP-e5Wgz02NA=w1280' /></Link>
          <p>Análise de Dados - Dashboard - Materiais de papelaria.</p>
        </div>
        <div className="cards"> 
          <Link to='https://app.powerbi.com/view?r=eyJrIjoiMzVlYWYzMTktMzEyOS00ZTE4LTg5OTAtNmUwZTUwOTc3ZDNhIiwidCI6IjU4YzZmNTFiLWJiOGEtNDhkYi1hZDQ1LTVlMDg0YzFjOTgzOCJ9' target='_blank'><Card img ='https://lh4.googleusercontent.com/CrNhQ_2R9Ajy_39FiTPB688Xs1Rmb5agfXWUULiA0eB1jxzvROV5XXDZOxg_7Nnn5tInhqxzojpKdf1ajujYPV_TSRJGx7tExLuaUJ9VUTdvwBZAMnPEE5J3fBhoHziLlg=w1280' /></Link>
          <p>Análise de Dados - Dashboard - Análise descritiva, marketing digital.</p>
        </div>
        <div className="cards">
          <Link to='https://www.kaggle.com/code/devcesar/projeto-analise-de-dados' target='_blank'><Card img ='https://lh6.googleusercontent.com/Wt-I0dHgWFc2TnDba4mSdXfxP8RvN1jI6QWJ6si4kqMvjQSz42SuVQO-YwkR1OcngyWhU-uKx0E2jiGVc-Nz37hEn8r1xBmHdNyDMZXUFAQeYQdmXeSuvicgjsKAjBvWoA=w1280' /></ Link>
          <p>Notebook - Análise de dados de clientes de banco.</p>
        </div>
        <div className="cards">  
          <Link to='https://github.com/CesarSotnas/CesarSotnas-ExercicioPlotagemPython/blob/main/modulo_6_tarefa_3.ipynb' target='_blank'><Card img ='https://lh5.googleusercontent.com/NVi_T-JpKrYXGu2pkgFgVe2hxfYgiRc8dIiY45XZBxtWoG0qEI6pT87svZbfAdxIr_eUMsQ-z3XHNku1AKYbBvEVFmbB9cD5B6M5PKsgZK4yFEuvcA89oIeizPNul-8geA=w1280' /></ Link>
          <p>Notebook - Tratamento base de dados Sinasc_2019 - Rondônia.</p>
        </div>            
      </div>
    </div>
  )
}

export default Projetos