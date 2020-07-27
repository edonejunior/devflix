import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {Logotipo} from './styles.js'; 
import ButtonLink from './components/ButtonLink'; 
import './Menu.css';

function Menu() {
  return (
  <nav className="Menu">
      <a href="/">
          <Logotipo className="Logo" alt="DevFlix" src={Logo} />
      </a>
      <ButtonLink href="/" className="ButtonLink">Novo Vídeo</ButtonLink>
  </nav>
  
  
    );
}

export default Menu;
