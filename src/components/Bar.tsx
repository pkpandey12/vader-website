import React from "react";
import Fade from 'react-reveal/Fade';
import {scroller} from "react-scroll";

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

  const [expo, setExpo] = React.useState(true)

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
        <div id='bar-sec-3'
        onClick={()=>{
          scroller.scrollTo('mint-anchor', {
            duration: 500,
            delay: 100,
            smooth: true}
          )
        }}
        className={isSectionActive(2)?'focus-left': ''} onMouseEnter={()=>setChangeBackground({
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
                    LoomRaiders
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3))&& expo && 
                  <Fade>
                    <span >
                      3333
                    </span>
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    Tantalus
                  </Fade>
                  }
                </div>
                
                <div className='expo-section-body'>
                {isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                  <Fade>
                    Are multiversal beings drawn from their home realities to Tantalus in search of The Loom.
                    <br/>
                    When scientists on the worldcity of Tantalus unlocked string theory, they realized they could weave together
                    infinity into universes like a loom creates fabric from strings. However, infinity comes around...
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3)) && expo && 
                  <Fade>
                    Raiders are coming for The Loom for one reason or the other. There's a war coming. We convinced some raiders to switch sides and fight their vicious brethren.
                    <br/>
                    There are 54 species with different versions from various timelines. The universe has been painstakingly handmade for your tactical reference.
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    Is a place where dreams are real. The Loom Society is a group of extraordinary individuals who have come together to defend the Loom and Tantalus.
                    <br/>
                    You can join, and defend - or you can defect, and annihilate. The choice is yours, but you'll need help either way. 
                    Fortunately, help is available.
                      <br/>
                  </Fade>
                  }
                </div>

                <div className='expo-section-quote'>
                  {
                  isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                    <Fade>
                      "I like to move it, move it"
                      <div className='quote-attr'>- 0xCurry, Code and Business</div>
                    </Fade>
                  }
                  {
                  isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3)) && expo && 
                    <Fade>
                      "I like to move it, move it"
                      <div className='quote-attr'>- Surokara, Art and Concepts</div>
                    </Fade>
                  }
                  {
                  isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo &&  
                    <Fade>
                      "When times get tough, I put on my VR goggles to oggle at the metaverse so I can forget I live in a cardboard box"
                      <div className='quote-attr'>- St. Prometheus, Code and Story</div>
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