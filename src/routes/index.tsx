import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Frequencia from '../pages/Frequencia'
import Aluno from '../pages/Aluno'
import Editar from '../pages/Editar'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/frequencia" component={Frequencia} />
    <Route path="/aluno" component={Aluno} />
    <Route path="/editar" component={Editar} />


  </Switch>
)

export default Routes
