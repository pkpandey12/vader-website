import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade'
import "../extraStyles/glitchText.scss";
import { scroller } from "react-scroll";
import { Tooltip } from "@mui/material";

// const useStyles = makeStyles({
//   tooltip: {
//     fontFamily: "Vollkorn SC, serif",
//     fontSize: "1.5em",
//     cursor: "pointer",
//     color: "rgb(255, 255, 255)",
//     backgroundColor: "rgb(0, 0, 0)",
//     opacity: "80%",
//   }
// })

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
            }} data-tip="Mint" className="street-sec-adjustor">
              <Tooltip followCursor title="Mint">
              <div id='street-sec' onMouseEnter={()=>setMintXL(true)} onMouseLeave={()=>setMintXL(false)} className={mintXL? (rand? 'bar-section-xl' : "bar-section") : ''}
            style={{backgroundPosition: 'left'}}>
            </div>
            </Tooltip>
            </div>
            <div className="street-sec-adjustor">
            <Tooltip followCursor title="About Us">
            <div onClick={()=> {
              scroller.scrollTo('bar-container', {
                duration: 500,
                delay: 100,
                smooth: true}
              )
            }}id='street-sec' data-tip="About" onMouseEnter={()=>setBarXL(true)} onMouseLeave={()=>setBarXL(false)} className={barXL? (rand? 'bar-section-xl' : "bar-section") : ''}
            >
            </div>
            </Tooltip>
            </div>
            <div className="street-sec-adjustor">
            <Tooltip followCursor title="Roadmap">
              <div onClick={()=>{
                scroller.scrollTo('roadmap', {
                  duration: 500,
                  delay: 100,
                  smooth: true}
                )
              }}
              id='street-sec' data-tip="Roadmap" onMouseEnter={()=>setRoadmapXL(true)} onMouseLeave={()=>setRoadmapXL(false)} className={roadmapXL? (rand? 'bar-section-xl' : "bar-section") : ''}
              style={{backgroundPosition: 'right'}}>
                
              </div>
            </Tooltip>
            </div>
          </div>         
        </Fade>
      </div>

    </div>
  )
}

export default StreetView;