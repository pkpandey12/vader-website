import { Box } from "@mui/material";
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
        // onClick={()=>{
        //   scroller.scrollTo('mint-anchor', {
        //     duration: 500,
        //     delay: 100,
        //     smooth: true}
        //   )
        // }}
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
            <Box alignItems={"centre"} justifyContent="space-around" flexDirection="column">
            <div id="exposition-container-container">
              <Fade when={expo}>
                <Box alignItems="center" justifyContent="space-around" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <div id='exposition-container'>
                 <Box alignContent={'center'} justifyContent={'center'}>
                <div className = 'expo-section-title'>
                  {isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                  <Fade>
                    The Loom
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3))&& expo && 
                  <Fade>
                    <span style={{fontSize: '3vw'}}>
                      3333 LoomRaiders
                    </span>
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    Tantalus
                  </Fade>
                  }
                </div>
                </Box> 
                <Box>
                <div className='expo-section-body'>
                {isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                  <Fade>
                    When scientists on the worldcity of Tantalus unlocked string theory, they realized they could weave together
                    infinity into universes like a loom creates fabric from strings. Hence, they called it The Loom. However, infinity comes with a proportional cost.
                    <br/>
                    Along with infinite resources, beings of extraordinary, godlike power began seeping through the cracks. They were 
                    simultaneously created by the loom and driven to seek it out. In their eyes, they had lived full lives, and this Loom had ripped their universes asunder.
                    <br/>
                  </Fade>
                  }
                  {isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3)) && expo && 
                  <Fade>
                    are coming for The Loom for one reason or the other. The world of Tantalus has grown used to their presence, and many raiders have joined society for its betterment.
                    The raiders now live in a comparitively egalitarian society, where all of their exotic existences have made Tantalus the heart of metaversal culture.
                    <br/>
                    There are 54 species with different versions from various timelines. Some of them have rare Titan genes that set them apart from their peers. The universe has been painstakingly handmade for your tactical reference.
                    <br/>
                  </Fade>
                  }
                  {isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo && 
                  <Fade>
                    Is a place where dreams are real, but so are nightmares. With so many Raiders about, the world can be a dangerous place. 
                    The Loom Society is a group of extraordinary individuals who have come together to defend the Loom and Tantalus from the many threats it faces.
                    <br/>
                    The world is infinite, and you decided what happens to it.
                    On Tantalus, your choices matter. On Tantalus, you can be anything. You can join, and defend - or you can defect, and annihilate.
                    The choice is yours, but you'll need help either way. 
                    Fortunately, help is available.
                      <br/>
                  </Fade>
                  }
                </div>
                </Box>
                <div className='expo-section-quote'>
                  {
                  isSectionActive(1) && (!isSectionActive(2) && !isSectionActive(3)) && expo && 
                    <Fade>
                      "I should be building but I can't stop aping into NFTs"
                      <div className='quote-attr'>- 0xCurry, Code and Business</div>
                    </Fade>
                  }
                  {
                  isSectionActive(2) && (!isSectionActive(1) && !isSectionActive(3)) && expo && 
                    <Fade>
                      "Stay strapped or get clapped"
                      <div className='quote-attr'>- Surokara, Art and Concepts</div>
                    </Fade>
                  }
                  {
                  isSectionActive(3) && (!isSectionActive(2) && !isSectionActive(1)) && expo &&  
                    <Fade>
                      "I used to be a communist until I started making money"
                      <div className='quote-attr'>- St. Prometheus, Code and Story</div>
                    </Fade>
                  }
                  </div>
                </div>
                </Box>
              </Fade>
            </div>
            </Box>
        </div>
      </div>
    </div>
  );
};

export default Bar;