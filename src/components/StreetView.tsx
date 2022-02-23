import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade'
import "../extraStyles/glitchText.scss";
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { scroller } from "react-scroll";



const StreetView = (props?: any) => {

  const [mintXL, setMintXL] = React.useState(false);
  const [barXL, setBarXL] = React.useState(false);
  const [roadmapXL, setRoadmapXL] = React.useState(false);
  const [rand, setRand] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random()*2);
      setRand(rand !== 0);
    }, 100)

    return () => clearInterval(interval);
  })

  return (
    <div id='streetview-navigator'>
{/*       
      <div id="cover-image">
      </div> */}

     

      <div
        id="street-container"
        className={'background-loader'}
      >
        <Fade bottom>
          <div id='street-section-container'>
            <div onClick={()=>{
              scroller.scrollTo('mint-container', {
                duration: 500,
                delay: 100,
                smooth: true}
              )
            }} className="street-sec-adjustor"><div id='street-sec' onMouseEnter={()=>setMintXL(true)} onMouseLeave={()=>setMintXL(false)} className={mintXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
            <MouseTooltip
              visible={mintXL}
              offsetX={15}
              offsetY={10}
            >
              <span className="tooltip-text">Mint</span>
            </MouseTooltip>
            </div>
            </div>
            <div className="street-sec-adjustor">
            <div onClick={()=> {
              scroller.scrollTo('bar-container', {
                duration: 500,
                delay: 100,
                smooth: true}
              )
            }}id='street-sec' onMouseEnter={()=>setBarXL(true)} onMouseLeave={()=>setBarXL(false)} className={barXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
            <MouseTooltip
              visible={barXL}
              offsetX={15}
              offsetY={10}
            >
              <span className="tooltip-text">About</span>
            </MouseTooltip>
            </div>
            </div>
            <div className="street-sec-adjustor">
            <div onClick={()=>{
              scroller.scrollTo('roadmap', {
                duration: 500,
                delay: 100,
                smooth: true}
              )
            }}
            id='street-sec' onMouseEnter={()=>setRoadmapXL(true)} onMouseLeave={()=>setRoadmapXL(false)} className={roadmapXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
            <MouseTooltip
              visible={roadmapXL}
              offsetX={15}
              offsetY={10}
            >
              <span className="tooltip-text">Roadmap</span>
            </MouseTooltip>
            </div>
            </div>
          </div>         
        </Fade>
      </div>

    </div>
  )
}

export default StreetView;