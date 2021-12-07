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

const NavBar = (props: any) => {

  const setIsOpen = props.setIsOpen;
  const connectWallet = props.connectWallet;
  const setWallet = props.setWallet;
  const walletAddress = props.walletAddress;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
    <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >   
                <MenuItem key={'home'} onClick={()=>{
                  handleCloseNavMenu();
                  scroller.scrollTo('streetview-navigator', {
                    duration: 1500,
                    delay: 100,
                    smooth: true}
                  )
                }}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem key={'mint'} onClick={()=>{
                  handleCloseNavMenu()
                  setIsOpen(true)
                  }
                }>
                  <Typography textAlign="center">Mint</Typography>
                </MenuItem>
                <MenuItem key={'about'} onClick={()=>{
                  handleCloseNavMenu();
                  scroller.scrollTo('bar-container', {
                    duration: 1500,
                    delay: 100,
                    smooth: true}
                  )
                }}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem key={'roadmap'} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Roadmap</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                key={'home'}
                onClick={()=>{
                  handleCloseNavMenu();
                  scroller.scrollTo('streetview-navigator', {
                    duration: 1500,
                    delay: 100,
                    smooth: true}
                  )
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
          </Button>
          <Button
                key={'Mint'}
                onClick={()=>{
                  handleCloseNavMenu()
                  setIsOpen(true)
                  }
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Mint
          </Button>
          <Button
                key={'about'}
                onClick={()=>{
                  handleCloseNavMenu()
                  scroller.scrollTo('bar-container', {
                    duration: 1500,
                    delay: 100,
                    smooth: true}
                  )
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
          </Button>
          <Button
            key={'roadmap'}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Roadmap
          </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            
            <Button variant='outlined' onClick={connectWalletPressed}>
            {walletAddress === "" && "Connect Wallet"}
            {walletAddress !== "" && walletAddress}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;