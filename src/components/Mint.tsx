import React from 'react';

import MouseTooltip from 'react-sticky-mouse-tooltip';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

const Mint = () => {

  const [truth, setTruth] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const rand = truth === 6? 0 : truth+1;
      setTruth(rand);
      console.log(rand)
    }, 1000)

    return () => clearInterval(interval);
  })

  const setMessage = () => {
    switch(truth){
      case 0:
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25rem'}}>OTW</div>
      case 1:
        return <div style={{fontFamily: 'Poppins, sans-serif', fontSize: '15rem'}}>जल्द ही</div>
      case 2:
        return  <div style={{fontFamily: 'Black Han Sans, sans-serif', fontSize: '20rem'}}>곧 출시</div>
      case 3:
        return <div style={{fontFamily: 'DotGothic16, sans-serif', fontSize: '13rem'}}>即將上市</div>
      case 4:
        return <div style={{fontFamily: 'Reem Kufi, sans-serif', fontSize: '20rem'}}>قريبا</div>
      case 5:
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25rem'}}>OTW</div>
      case 6:
        return <div style={{fontFamily: 'DotGothic16, sans-serif', fontSize: '20rem'}}>OTW</div>
      default:
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25rem'}}>OTW</div>
    }
  }

  const [showTooltip, setShow] = React.useState(false);

  return(
    <div id="mint-anchor" >
    <div className='mint-container'>
      <div id='left-mint' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
         <GlitchClip>
        {
        setMessage()
        }
        </GlitchClip>
      </div>
    </div>
    <MouseTooltip
                    visible={showTooltip}
                    offsetX={15}
                    offsetY={10}
                  >
                    <span className="tooltip-text">Coming Soon!</span>
    </MouseTooltip>
    </div>
  )
}

export default Mint;