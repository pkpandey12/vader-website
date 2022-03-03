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


function DiscordIcon() {
  return (
    <Icon className='image-root'>
      <img className='image-icon' alt='discord' src={discord}/>
    </Icon>
  );
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

          
          <Box alignItems="center" justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                  <IconButton
              size="large"
              edge="end"
              aria-label="discord"
              color="inherit"
              onClick={()=> window.open(`https://discord.gg/fvHCpScMUg`, "_blank")}
            >
              <DiscordIcon/>
            </IconButton>
          <Swing when={logoHover}>
            <img data-tip="The Street" className='logo-icon' alt='loomlogo' src={loomlogo} onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)} onClick={()=>{
                    handleCloseNavMenu();
                    scroller.scrollTo('streetview-navigator', {
                      duration: 500,
                      delay: 100,
                      smooth: true}
                    )
                  }}
            />
          </Swing>
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
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;