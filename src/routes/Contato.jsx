import cartaoVisita from '../assets/cartao-visita.png';
import './css/Contato.css'

const Contato = () => {
  return (
    <div className='home-container'>
      <div className='img-empreendedor'>
      </div>
      <div className="formulario">
        <img src={cartaoVisita} alt="" />
        <form action="" className='contato-formulario'>
            <h3>Contato:</h3>
          <div className='contato-formulario-div'>
            <label htmlFor="nome">Nome:</label> <br />
            <input type="text" required=""/>
          </div>
          <div className='contato-formulario-div'>
            <label htmlFor="telefone">Telefone:</label> <br />
            <input type="text" />
          </div>
          <div className='contato-formulario-div'>
            <label htmlFor="email">E-mail:</label> <br />
            <input type="text" />
          </div>
          <div className='contato-formulario-div'>
            <label htmlFor="">Como posso ajudar? </label> <br />
            <textarea name="" id=""></textarea>
          </div>
          <input id='input-submit' type="reset" />
          <input id='input-submit' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Contato