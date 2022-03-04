import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {scroller} from "react-scroll";

const ElevatorDoors = (props?:any) => {


  const [doorsOpen, setDoorsOpen] = useState(false);

  return(
    <div id="elevator-container" style={{opacity: doorsOpen? '100%' : '0%'}}>
    
      <Fade left when={!doorsOpen}>
      <div id="left-door">

      </div>
      </Fade>
      <Fade right when={!doorsOpen}>
      <div id ="right-door">
      </div>
      </Fade>
      <div id='button-placement-helper'>
        <div className="button-container">
        <Zoom bottom opposite when={!doorsOpen}>
          <div className='elevator-button' onClick={()=>{
            props?.func2(true);
            setDoorsOpen(true)
            setTimeout(function(){scroller.scrollTo('streetview-navigator', {
              duration: 1500,
              delay: 100,
              smooth: true}
            )}, 1000);
            setTimeout(function(){
              props?.func(false);
            },15000); 
            }}>
          </div>
        </Zoom>
        </div>
      </div>
    </div>
  );
};

export default ElevatorDoors;