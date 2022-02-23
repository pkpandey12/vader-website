import React from "react";
import Fade from 'react-reveal/Fade';

const defaultBackGroundState = {
  sec1: '0%',
  sec2: '0%',
  sec3: '0%',
  rest: '0%'
}

const Bar = () => {

  const [changeBackground, setChangeBackground] = React.useState (defaultBackGroundState)

  const isSectionActive = (input: number) => {
    if (input === 1) {
      return changeBackground.sec1 === '0%';
    }
    else if (input === 2) {
      return changeBackground.sec2 === '0%';
    } 
    else if (input === 3) {
      return changeBackground.sec3 === '0%';
    }
  }

  const [expo, setExpo] = React.useState(false)

  return (
    <div id="bar-container">
      <div className='bar-sec-container'>
        {/* section 1 */}
        <div id='bar-sec-1' className={isSectionActive(2)?'focus-right': ''} onMouseEnter={()=>setChangeBackground({
          sec1: '0%',
          sec2: '80%',
          sec3: '80%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{opacity: changeBackground.sec1 !=='0%'? changeBackground.sec1 : '0%'}}>
        </div>
        {/* section 2 */}
        <div id='bar-sec-2' className={isSectionActive(1)?'focus-left': isSectionActive(3)? 'focus-right' : ''} onMouseEnter={()=>setChangeBackground({
          sec1: '80%',
          sec2: '0%',
          sec3: '80%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{
          
          opacity: changeBackground.sec2 !=='0%'? changeBackground.sec2 : '0%'}}>

        </div>
        {/* section 3 */}
        <div id='bar-sec-3' className={isSectionActive(2)?'focus-left': ''} onMouseEnter={()=>setChangeBackground({
          sec1: '80%',
          sec2: '80%',
          sec3: '0%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{opacity: changeBackground.sec3 !=='0%'? changeBackground.sec3 : '0%'}}>
        </div>
        <div id='bar-rest-sec' className={isSectionActive(3) && expo?'focus-left-sec': ''} 
          style={{opacity: expo && (!isSectionActive(1) || !isSectionActive(2) || !isSectionActive(3))? '100%' : '0%'}}
          onMouseEnter={()=>setExpo(false)} onMouseLeave={()=>setExpo(true)}>
            <div id="exposition-container-container">
              <Fade when={expo}>
                <div id='exposition-container'>
                  
                <div className = 'expo-section-title'>
                  {isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                  <Fade>
                    0xCurry
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3))&& expo && 
                  <Fade>
                    Surokara
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    St. Prometheus
                  </Fade>
                  }
                </div>
                
                <div className='expo-section-body'>
                {isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                  <Fade>
                    Veneral disease king
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3)) && expo && 
                  <Fade>
                    Penis man
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    Lil cum slut
                  </Fade>
                  }
                </div>

                </div>
              </Fade>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;