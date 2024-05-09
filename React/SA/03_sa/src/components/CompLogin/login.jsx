import { Link, Outlet } from 'react-router-dom';
import './login.css';


function login () {


  return (  
    <div className='container'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                Bem-Vindo
            </div>
            <div className='c_baixo'>
                ao sistema Agil
            </div>
        </div>
        <div className='m_meio'>
            <input className='inputs' placeholder='Senha' />
            <input className='inputs' placeholder='Usuário' />
        </div>
        <div className='m_baixo'>
            <Link className='botao' to="/Inicio">Entrar</Link>
            <Link to="/recuperacao" className='esqueceu'>Esqueceu sua senha?</Link>
        </div>
      </div>
    </div>
  )
}

export default login;