import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {scroller} from "react-scroll";
import {
  connectWallet,
  getCurrentWalletConnected
} from "../services/metaMaskServices";

import loomlogo from '../assets/loomlogo.svg'
import { Icon } from '@mui/material';

import MouseTooltip from 'react-sticky-mouse-tooltip';


const NavBar = (props: any) => {

  const setWallet = props.setWallet;
  const walletAddress = props.walletAddress;
  const mintable = props.mintable;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [logoHover, setLogoHover] = React.useState(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    alert(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          
          <Box alignItems="center" justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <MouseTooltip
                    visible={logoHover}
                    offsetX={15}
                    offsetY={10}
                  >
                    <span className="tooltip-text-logo">The Street</span>
                  </MouseTooltip>
          <img className='logo-icon' alt='discord' src={loomlogo} onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)} onClick={()=>{
                  handleCloseNavMenu();
                  scroller.scrollTo('streetview-navigator', {
                    duration: 1500,
                    delay: 100,
                    smooth: true}
                  )
                }}/>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;