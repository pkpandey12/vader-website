import React from 'react';

import MouseTooltip from 'react-sticky-mouse-tooltip';

const Mint = () => {

  const [showTooltip, setShow] = React.useState(false);

  return(
    <div id="mint-anchor" >
    <div className='mint-container'>
      <div id='left-mint' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <MouseTooltip
                    visible={showTooltip}
                    offsetX={15}
                    offsetY={10}
                  >
                    <span className="tooltip-text">Coming Soon!</span>
        </MouseTooltip>
        
      </div>
    </div>
    </div>
  )
}

export default Mint;