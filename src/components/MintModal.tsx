import React from 'react';

const MintModal = (props: any) => {
  const numNft = props.numNft;
  const setIsOpen = props.setIsOpen;
  const setNumNft = props.setNumNft;
  return (
    <div>
          <div id='my-modal' className='button-container'>
            <div id="modal-return" onClick={() => setIsOpen(false)}>
              ESC
            </div>
            <p className='glitch'>
              Welcome to Tantalus!
            </p>
            <div id="modal-prompt-number">
              How many vaders would you like to mint?
            </div>
            <div id="mint-num-container">
              <span id="num-up" onClick={() => numNft > 1 ? setNumNft(numNft - 1) : setNumNft(numNft)}>-</span>
              <input type='number' value={numNft} min={1} id="mint-num-input" onChange={(e) => (console.log(e.target.value))} />
              <span id="num-up" onClick={() => setNumNft(numNft + 1)}>+</span>
            </div>
            <div id="modal-mint-button">
              Mint
            </div>
          </div>
          <div id="modal-background">
          </div>
        </div>
  )
}

export default MintModal;