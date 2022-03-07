// © 2022 Praneet Kumar Pandey under MIT license

import React, { useEffect, useRef, useState } from 'react';
import { scrollSpy } from 'react-scroll';

import './App.scss';
import useScrollSnap from 'react-use-scroll-snap';
import ElevatorDoors from './components/ElevatorDoors';
import StreetView from './components/StreetView';
import Bar from './components/Bar';
import Navbar from './components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider, useMediaQuery } from '@mui/material';
import Mint from './components/Mint';
import Roadmap from './components/Roadmap';

import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';


const App = () => {

  const [showElevator, setShowElevator] = useState(true);
  const [showCover, setShowCover] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [numNft, setNumNft] = React.useState(1);
  const [walletAddress, setWallet] = useState("");
  
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;


  const [showMobileWarning, setShowMobileWarning] = useState(isMobile);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "Vollkorn SC, serif",
            fontSize: "1.5em",
            cursor: "pointer",
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgba(0, 0, 0,0.75)",
          }
        }
      }
    }
  })


  const fromChildSetElevator = (val: boolean) => {
    setShowElevator(val);
  }

  const fromChildSetWallet = (val: any) => {
    setWallet(val);
  }

  const fromChildOpenModal = (val: boolean) => {
    setIsOpen(val)
  }

  const fromChildSetNumNFT = (val: number) => {
    setNumNft(val);
  }

  const fromChildShowCoverOnStreet = (val: boolean) => {
   setShowCover(val); 
  }

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      // window.scrollTo(0,0);
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);


  const container = useRef(null);

  useScrollSnap({ ref: container, duration: 200, delay: 0 });

  document.body.style.overflow = showCover? "scroll" : "hidden";

  useEffect( () => {
    console.log(scrollSpy.currentPositionY);
  },[])

  return (
    <ThemeProvider theme={theme}>
      <div  className={"app-container"}>
        <Dialog
          open={showMobileWarning}
          onClose={()=>setShowMobileWarning(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"This website is better viewed on desktop devices"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              While you <em>can</em> use this website on a mobile device, we've put in a lot of work
              optimising this for desktop. If you'd like a deeper, more immersive experience, switch
              to a desktop device!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setShowMobileWarning(false)}>If you say so 🤷</Button>
            <Button onClick={()=>setShowMobileWarning(false)} autoFocus>
              I'll take my chances 🙄
            </Button>
          </DialogActions>
        </Dialog>
      {/* {showElevator &&  */}
        <ElevatorDoors func={fromChildSetElevator} func2={fromChildShowCoverOnStreet}/>
      {/* } */}
      <CssBaseline/>
      <div id='container' ref={container}>

        <div style={{opacity: showCover? '100%':'0%'}}>
          <Navbar
          mintable={false}
          setIsOpen={fromChildOpenModal}
          setWallet={fromChildSetWallet}
          walletAddress={walletAddress}
          />

        <StreetView
          setIsOpen={fromChildOpenModal}/>

          <Bar/>

           <Mint/>


        <Roadmap/>
        </div>
        
             

    </div>
    </div>
  </ThemeProvider>
  )
}
export default App;
