import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

// Forma mais "correta"
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,

  <BrowserRouter>
    <Switch>
      {/* Se colocar atributo 'exact', será mais restrito ao caminho especificado. */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* <Route component={() => (<div>Página 404</div>)}  /> */}
      <Route component={Pagina404}  />
    </Switch>
  </BrowserRouter>,  

  document.getElementById('root')
);
