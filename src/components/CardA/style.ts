import styled, { css } from 'styled-components'

export const Cards = styled.div`
  width: 25vw;
  height: auto;
  float: left;
  margin-top: 2.50vh;
  margin-right: 4.1vw;
  background-color: white;
  box-shadow: 0.45vh 0.45vh 0.45vh 0.45vh rgba(0.25, 0.25, 0.25, 0.25);
  border-radius: 1.2vh;
  padding-bottom: 15px;

  #Secao {
    width: 14.64vw;
    height: 1.5vh;
    float: left;
    margin-top: 0.75vh;
    margin-left: 2.25vh;
    color: #2199b3;
    font-size: 1.73vh;
  }

  #Nome {
    width: 17vw;
    height: auto;
    float: left;
    margin-top: 1.28vh;
    margin-left: 1.09vw;
    color: black;
    font-weight: bold;
    font-size: 2.28vh;
  }

  #Status {
    width: 14.64vw;
    height: 1.5vh;
    float: left;
    margin-top: 0.75vh;
    margin-left: 2.25vh;
    color: black;
    font-size: 1.73vh;
  }
  #check{
    transform: translate(-20px, 2px);
    position: absolute;
  }
  #checkA{
    transform: translate(-20px, 2px);
    position: absolute;

  }

`

export const Message = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 38px;
  color: black;
`

