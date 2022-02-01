import styled from 'styled-components'

export const NavBar = styled.div`
  position: fixed;
  background-color: #ffffff;
  width: 100vw;
  height: 90px;
  box-shadow: 0 0.15vh 0 rgba(0, 0, 0, 0.25);
  z-index: 10;

  #dropdown {
    width: 80px;
    height: 25px;
    margin-top: 60px;
    float: right;

    button {
      width: 100%;
      height: 100%;
      border: none;
      background-color: #ffff;
    }

    #contentIdioma {
      width: 80px;
      display: none;
      position: absolute;
      background-color: #ffff;

      cursor: pointer;

      .flagContainer {
        width: 100%;
        float: left;

        & + div {
          margin-top: 5px;
        }

        :hover {
          background-color: #c4c4c4;
        }
      }
    }
  }
`

export const Logo = styled.img`
  float: left;
  width: 90px;
`

export const Tab = styled.div`
  float: left;

  a {
    display: inline-block;
    text-align: center;
    line-height: 85px;
    margin-left: 85px;
    text-transform: uppercase;
    text-decoration: none;
    color: #0091bd;
    font-size: 14px;
    position: absolute;

    &:after {
      display: block;
      content: '';
      width: 100%;
      padding-right: 5px;
      padding-left: 5px;
      transform: translateX(-4px);
      height: 5px;
      background-color: #0091bd;
    }
  }
`

export const Language = styled.div`
  cursor: pointer;
  position: relative;
  top: 50%;
  right: 6%;
  transform: translateY(-50%);
  float: right;

  img {
    height: 25px;
    margin-right: 1.46vw;
  }

  svg {
    position: absolute;
    top: 10%;
    left: 110%;
    transform: translateX(-110%);
  }
`
