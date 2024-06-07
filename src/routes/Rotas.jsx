import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import ErrorPage from './ErrorPage.jsx'
import Projeto from './Projetos.jsx'
import Contato from './Contato.jsx'
import Home from './Home.jsx'

const Rotas = () => {

  return (
    <div className='Rotas'>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='projetos' element={<Projeto />}/>
                <Route path='contato' element={<Contato />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Rotas
