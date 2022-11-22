import React, { useState } from 'react'
import { HeaderButtonMenu, HeaderStyled } from './styled'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  }
  const handleClose = (e) => {
    e.stopPropagation();
    setOpenMenu(false);
  }
  return (
    <HeaderStyled>
      <HeaderButtonMenu
       className={`header-button ${openMenu ? 'is-open' : ''}`}
       onClick={handleClick}
       >
        <span></span><span></span><span></span>
        { openMenu ? <p className="button-text">MENU</p> : <p className="button-text">CLOSE</p>}
        {/* <button onClick={handleClose}>Close</button> */}
      </HeaderButtonMenu>
      <Menu
        id="basic-menu"
        anchorEl={openMenu}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </HeaderStyled>
  )
}

export default Header