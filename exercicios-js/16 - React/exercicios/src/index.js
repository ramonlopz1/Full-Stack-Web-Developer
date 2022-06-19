import React from 'react';
import ReactDOM from 'react-dom/client';

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Pai nome="Paulo" sobrenome="Lopes">
      <Filho nome="Pedro"></Filho>
      <Filho nome="Carla"></Filho>
      <Filho nome="Paulo"></Filho>

    </Pai>
  </div>
);
