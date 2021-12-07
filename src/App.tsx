import React, { useEffect, useRef, useState } from 'react';
import { scrollSpy } from 'react-scroll';

import './App.scss';
import useScrollSnap from 'react-use-scroll-snap';
import ElevatorDoors from './components/ElevatorDoors';
import StreetView from './components/StreetView';
import Bar from './components/Bar';
import Navbar from './components/NavBar';
import MintModal from './components/MintModal';

declare let window: any;


const App = () => {

  const [showElevator, setShowElevator] = useState(true);
  const [showCover, setShowCover] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [numNft, setNumNft] = React.useState(1);
  const [walletAddress, setWallet] = useState("");

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

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err: any) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  const container = useRef(null);

  useScrollSnap({ ref: container, duration: 200, delay: 0 });


  useEffect( () => {
    console.log(scrollSpy.currentPositionY);
  },[])

  return (
    <div  className={"app-container"}>
    {showElevator &&
      <ElevatorDoors func={fromChildSetElevator} func2={fromChildShowCoverOnStreet}/>
    }
    {/* {showCover &&
      // <Navbar/>
    } */}
    
    <div id='container' ref={container}>
      {showCover &&
        <Navbar
        setIsOpen={fromChildOpenModal}
        connectWallet={connectWallet}
        setWallet={fromChildSetWallet}
        walletAddress={walletAddress}
        />
      }
      {modalIsOpen &&
      <MintModal
        numNft={numNft}
        setIsOpen={fromChildOpenModal}
        setNumNft={fromChildSetNumNFT}
        />
      }
    { showCover &&
    <StreetView
      setIsOpen={fromChildOpenModal}/>
    }
    {showCover &&
      <Bar/>}
  </div>
  </div>
  )
}
export default App;
