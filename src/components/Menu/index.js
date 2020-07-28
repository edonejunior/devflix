import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import {Logotipo} from './styles.js'; 
import ButtonLink from './components/ButtonLink'; 
import './Menu.css';

function Menu() {
  return (
  <nav className="Menu">
      <Link to="/">
          <Logotipo className="Logo" alt="DevFlix" src={Logo} />
      </Link>

      <ButtonLink as={Link} to="/cadastro/video" className="ButtonLink">Novo Vídeo</ButtonLink>
  </nav>
  
  
    );
}

export default Menu;
