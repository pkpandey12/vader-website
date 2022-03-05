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
  connectWallet
} from "../services/metaMaskServices";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import loomlogo from '../assets/white-loomlogo.svg'
import { Icon } from '@mui/material';

import Swing from 'react-reveal/Swing';


import discord from '../assets/discord.svg'
import twitter from '../assets/twitter.svg'


function DiscordIcon() {
  return (
    <Icon className='image-root'>
      <img className='image-icon' alt='discord' src={discord}/>
    </Icon>
  );
}

function TwitterIcon() {
  return(
    <Icon className='image-root'>
      <img className='image-icon' alt='twitter' src={twitter}/>
    </Icon>
  )
}


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
    setWallet(walletResponse.address);
    scroller.scrollTo('mint-anchor', {
      duration: 500,
      delay: 100,
      smooth: true}
    )
  };

  return (
    <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box alignItems="center" width="100vw" justifyContent="space-evenly" sx={{ display:'flex' }}>
          <Box alignItems="center" width="31.2vw" justifyContent="right" sx={{display:'flex' }}>

          <IconButton
              size="large"
              edge="start"
              aria-label="metamask"
              color="inherit"
              onClick={()=>connectWalletPressed()}
            >
              <AccountBalanceWalletIcon/>
              
            </IconButton>
          </Box>
          <Box alignItems="center" width="34vw" justifyContent="center" sx={{ display:'flex' }}>       
          <Swing when={logoHover}>
            <img className='logo-icon' alt='loomlogo' src={loomlogo} onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)} onClick={()=>{
                    handleCloseNavMenu();
                    scroller.scrollTo('streetview-navigator', {
                      duration: 500,
                      delay: 100,
                      smooth: true}
                    )
                  }}
            />
          </Swing>
          </Box>
          <Box alignItems="center" width="33vw" justifyContent="left" sx={{ display:'flex' }}>        
            <IconButton
              size="large"
              edge="end"
              aria-label="discord"
              color="inherit"
              onClick={()=> window.open(`https://discord.gg/fvHCpScMUg`, "_blank")}
            >
              <DiscordIcon/>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="discord"
              color="inherit"
              onClick={()=> window.open(`https://twitter.com/TheLoomSociety`, "_blank")}
            >
              <TwitterIcon/>
            </IconButton>
            </Box>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;