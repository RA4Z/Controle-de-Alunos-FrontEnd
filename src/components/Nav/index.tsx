import React, { useState } from 'react'
import weg from '../../assets/weg-logo.svg'

import { NavBar, Logo, Tab } from './style'

import Menu from '@mui/material/Menu'

interface navProps {
  label: string
}

const Nav: React.FC<navProps> = ({ label }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <NavBar>
      <a href="/">
        <Logo src={weg} alt="weg"/>
      </a>

      <Tab>
        <a>{label}</a>
      </Tab>

      <Menu
        id="dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
     
      </Menu>
    </NavBar>
  )
}

export default Nav
