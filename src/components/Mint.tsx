import React from 'react';

import GlitchClip from 'react-glitch-effect/core/GlitchClip';

import { Tooltip } from '@mui/material';

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
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25vw'}}>OTW</div>
      case 1:
        return <div style={{fontFamily: 'Hind, sans-serif', fontSize: '10vw'}}>जल्द ही</div>
      case 2:
        return  <div style={{fontFamily: 'Black Han Sans, sans-serif', fontSize: '10vw'}}>곧 출시</div>
      case 3:
        return <div style={{fontFamily: 'DotGothic16, sans-serif', fontSize: '9vw'}}>即將上市</div>
      case 4:
        return <div style={{fontFamily: 'Reem Kufi, sans-serif', fontSize: '20vw'}}>قريبا</div>
      case 5:
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25vw'}}>OTW</div>
      case 6:
        return <div style={{fontFamily: 'DotGothic16, sans-serif', fontSize: '20vw'}}>OTW</div>
      default:
        return <div style={{fontFamily: 'VT323, monospace', fontSize: '25vw'}}>OTW</div>
    }
  }

  const [showTooltip, setShow] = React.useState(false);

  return(
    <div id="mint-anchor" >
    <div className='mint-container'>
      <Tooltip followCursor title='Coming Soon!'>
        <div data-tip="Coming Soon!" id='left-mint' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
          <GlitchClip>
          {
          setMessage()
          }
          </GlitchClip>
        </div>
      </Tooltip>
    </div>
    </div>
  )
}

export default Mint;