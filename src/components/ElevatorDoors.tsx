import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import {scroller} from "react-scroll";

const ElevatorDoors = () => {

  const [doorsOpen, setDoorsOpen] = useState(false);

  return(
    <div id="elevator-container">
    
      <Fade left when={!doorsOpen}>
      <div id="left-door">

      </div>
      </Fade>
      <Fade right when={!doorsOpen}>
      <div id ="right-door">
        <div id='button-placement-helper'>
        <div id="button-container">
          <div id="retro-button" onClick={()=>{
            setDoorsOpen(true)
            scroller.scrollTo('section1', {
              duration: 1500,
              delay: 100,
              smooth: true}
            )}}>
                Enter
          </div>
        </div>
      </div>
      </div>
      </Fade>
    </div>
  );
};

export default ElevatorDoors;