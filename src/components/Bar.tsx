import React from "react";

const defaultBackGroundState = {
  sec1: '0%',
  sec2: '0%',
  sec3: '0%',
  rest: '0%'
}

const Bar = () => {

  const [changeBackground, setChangeBackground] = React.useState (defaultBackGroundState)

  return (
    <div id="bar-container">
      <div id='bar-sec-container'>
        {/* section 1 */}
        <div id='bar-sec-1' onMouseEnter={()=>setChangeBackground({
          sec1: '0%',
          sec2: '100%',
          sec3: '100%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{opacity: changeBackground.sec1 !=='0%'? changeBackground.sec1 : '0%'}}>
        </div>
        {/* section 2 */}
        <div id='bar-sec-2' onMouseEnter={()=>setChangeBackground({
          sec1: '100%',
          sec2: '0%',
          sec3: '100%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{opacity: changeBackground.sec2 !=='0%'? changeBackground.sec2 : '0%'}}>

        </div>
        {/* section 3 */}
        <div id='bar-sec-3' onMouseEnter={()=>setChangeBackground({
          sec1: '100%',
          sec2: '100%',
          sec3: '0%',
          rest: '100%'
        })} onMouseLeave={()=>setChangeBackground(defaultBackGroundState)} style={{opacity: changeBackground.sec3 !=='0%'? changeBackground.sec3 : '0%'}}>
        </div>
        <div id='bar-rest-sec' style={{opacity: changeBackground.rest !=='0%'? changeBackground.rest : '0%'}}>

        </div>
      </div>
    </div>
  );
};

export default Bar;