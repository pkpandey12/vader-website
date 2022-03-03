import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade'
import "../extraStyles/glitchText.scss";
import { scroller } from "react-scroll";
import ReactTooltip from "react-tooltip";



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
            }} data-tip="Mint" className="street-sec-adjustor"><div id='street-sec' onMouseEnter={()=>setMintXL(true)} onMouseLeave={()=>setMintXL(false)} className={mintXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
            </div>
            </div>
            <div className="street-sec-adjustor">
            <div onClick={()=> {
              scroller.scrollTo('bar-container', {
                duration: 500,
                delay: 100,
                smooth: true}
              )
            }}id='street-sec' data-tip="About" onMouseEnter={()=>setBarXL(true)} onMouseLeave={()=>setBarXL(false)} className={barXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
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
            id='street-sec' data-tip="Roadmap" onMouseEnter={()=>setRoadmapXL(true)} onMouseLeave={()=>setRoadmapXL(false)} className={roadmapXL? (rand? 'bar-section-xl' : "bar-section") : ''}>
              
            </div>
            </div>
            <ReactTooltip place="bottom"  effect="float" className="tooltip-text-logo"/>
          </div>         
        </Fade>
      </div>

    </div>
  )
}

export default StreetView;