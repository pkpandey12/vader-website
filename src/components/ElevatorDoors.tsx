import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import {scroller} from "react-scroll";

const ElevatorDoors = (props?:any) => {


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
        <div className="button-container">
          <div id="retro-button" onClick={()=>{
            props?.func2(true);
            setDoorsOpen(true)
            setTimeout(function(){scroller.scrollTo('streeview-navigator', {
              duration: 1500,
              delay: 100,
              smooth: true}
            )}, 1000);
            setTimeout(function(){
              props?.func(false);
            },5000); 
            }}>
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