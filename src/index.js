import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (
  <div>
   Página 404
  </div>
)
  
;

ReactDOM.render(


  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      
      <Route path="/cadastro/video"component={CadastroVideo} exact/>

      <Route component={Pagina404} />
    </Switch>

   {/*  
    <CadastroCategoria /> */}

  </BrowserRouter>,
  document.getElementById('root')
);


