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
        <div id='bar-rest-sec' className={isSectionActive(3)?'focus-left-sec': ''} 
          style={{opacity: changeBackground.rest !=='0%'? changeBackground.rest : '0%'}}>
            <div id="exposition-container-container">
              <Fade right when={isSectionActive(1)}>
                <div id='exposition-container'>
                  
                </div>
              </Fade>
              <Fade right when={isSectionActive(2)}>
                <div id='exposition-container'>
                  
                </div>
              </Fade>
              <Fade right when={isSectionActive(3)}>
                <div id='exposition-container'>
                  
                </div>
              </Fade>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;