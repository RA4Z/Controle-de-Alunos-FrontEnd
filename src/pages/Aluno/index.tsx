import React from 'react'
import { useHistory } from 'react-router'
import NavBar from '../../components/Nav'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Caixa, Back } from './style'

import { Tooltip } from '@material-ui/core'
import CardF from '../../components/CardF'

const Aluno: React.FC = () => {
  const history = useHistory()

  function voltar() {
      history.push("/cadastro");
  }
  return (
      <>
          <NavBar label={"Cadastro de Alunos"} />
          <div id="tudo" style={{ transition: "0.5s" }}>
             
                  <Tooltip title="Voltar">
                      <Back id="voltar" onClick={voltar}>
                          <ArrowBackIcon />
                      </Back>
                  </Tooltip>
                  <Caixa id="caixa">
                  <CardF />                
                  </Caixa>
          </div>
      </>

  );

}
export default Aluno;