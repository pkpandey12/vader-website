import React from "react";
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';
import "../extraStyles/glitchText.scss";
import {scroller} from "react-scroll";

const StreetView = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [numNft, setNumNft] = React.useState(1);
  return (
    <div id='streeview-navigator'>
      {modalIsOpen &&
      <div>
        <div id='my-modal' className='button-container'>
          <div id="modal-return" onClick={()=>setIsOpen(false)}>
          ESC
          </div>
          <p className='glitch'>
            Welcome to Tantalus!
          </p>
          <div id="modal-prompt-number"> 
          How many vaders would you like to mint?
          </div>
          <div id="mint-num-container">
            <span id="num-up" onClick={()=>setNumNft(numNft-1)}>-</span>
            <input type='number' value={numNft} min={1} id="mint-num-input" onChange={(e)=>(console.log(e.target.value))}/>
            <span id="num-up" onClick={()=>setNumNft(numNft+1)}>+</span>
          </div>
          <div id="modal-mint-button">
            Mint
          </div>
        </div>
        <div id="modal-background">
        </div>
      </div>}
        <div id="cover-image">
      </div>
      <Fade bottom>
            <div
              id="street-container"
              className={'background-loader'}
            >
              <div id='left-side-street'>
                <div id='mint-nav' className='gradient-box' onClick={()=>setIsOpen(true)}>
                  <div id="mint-me">
                   Mint
                  </div>
                </div>
              </div>
              <div id='right-side-street'>
                <div id='about-nav' className='gradient-box'>
                  <div id="enter-bar" onClick={()=>{
                    scroller.scrollTo('bar-container', {
                      duration: 1500,
                      delay: 100,
                      smooth: true}
                    )}}>
                    Bar
                  </div>
                </div>
              </div>
            </div>
      </Fade>
    </div>
  )
}

export default StreetView;