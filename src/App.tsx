import React, { useEffect, useRef, useState } from 'react';
import { scrollSpy } from 'react-scroll';

import './App.scss';
import useScrollSnap from 'react-use-scroll-snap';
import ElevatorDoors from './components/ElevatorDoors';
import StreetView from './components/StreetView';
import Bar from './components/Bar';

const App = () => {

  const [showElevator, setShowElevator] = useState(true);
  const [showCover, setShowCover] = useState(false);

  const fromChildSetElevator = (val: boolean) => {
    setShowElevator(val);
  }

  const fromChildShowCoverOnStreet = (val: boolean) => {
   setShowCover(val); 
  }

  const container = useRef(null);

  useScrollSnap({ ref: container, duration: 200, delay: 0 });


  useEffect( () => {
    console.log(scrollSpy.currentPositionY);
  },[])

  return (
    <div  className={"app-container"}>
    {showElevator &&
      <ElevatorDoors func={fromChildSetElevator} func2={fromChildShowCoverOnStreet}/>
    }
    
    <div id='container' ref={container}>
    {/* <Navbar /> */}
    { showCover &&
    <StreetView/>
    }
    {showCover &&
      <Bar/>}
  </div>
  </div>
  )
}
export default App;
