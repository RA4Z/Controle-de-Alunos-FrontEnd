import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #ffffff;
  height: 13.69vh;
  box-shadow: 0 0.15vh 0 rgba(0, 0, 0, 0.25);
`

export const Back = styled.div`
  cursor: pointer;
  opacity: 1;
  margin-left: 170px;
  margin-top: 130px;
  position: absolute;

  img {
    height: 5vh;
    transition: transform 0.4s ease-in-out;
  }

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }

  @keyframe desaparecer {
    to {
      opacity: 1;
    }
  }
`

export const Caixa = styled.div`
  width: 60vw;
  height: auto;
  padding-bottom: 6.08vh;
  float: right;
  margin-top: 30vh;
  margin-right: 37vh;
  background-color: transparent;
  border-radius: 1vh 1vh 1vh 1vh;
  transition: 0.5s;

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }
  #botao {
    position: absolute;
    width: auto;
    height: 35px;
    margin-top: -5px;
    background: #00579d;
    transform: translate(700px,-57px);
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #007ddb;
    }
  }
  
`

export const EnvioDados = styled.div`
  position: absolute;
  cursor: pointer;
  opacity: 1;
  margin-top: 127px;
  margin-left: 1220px;
  float: right;

  img {
    height: 5vh;
    transition: transform 0.4s ease-in-out;
  }

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }

  @keyframe desaparecer {
    to {
      opacity: 1;
    }
  }
`
